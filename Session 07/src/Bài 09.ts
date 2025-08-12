class Comment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: Comment[] = [];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addReply(reply: Comment): void {
        this.replies.push(reply);
    }
}

class Post {
    public id: number;
    public userId: number;
    public content: string;
    public likes: number[] = [];
    public comments: Comment[] = [];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addLike(userId: number): void {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[] = [];
    public followers: User[] = [];

    constructor(id: number) {
        this.id = id;
    }

    createPost(content: string): void {
        const newPost = new Post(this.posts.length + 1, this.id, content);
        this.posts.push(newPost);
    }

    comment(post: Post, commentContent: string): void {
        const newComment = new Comment(post.comments.length + 1, this.id, commentContent);
        post.addComment(newComment);
    }

    follow(user: User): void {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }

    likePost(post: Post): void {
        post.addLike(this.id);
    }

    viewFeed(): void {
        console.log(`Feed của user ${this.id}:`);
        this.followers.forEach(followedUser => {
            followedUser.posts.forEach(post => {
                console.log(`- Bài đăng #${post.id} từ User ${followedUser.id}: ${post.content}`);
            });
        });
    }
}

const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);

user1.follow(user2);
user1.follow(user3);

user2.createPost("Hello, đây là bài đầu tiên của tôi");
user2.createPost("Hôm nay trời đẹp quá");

user3.createPost("Lập trình TypeScript thật thú vị");

user1.likePost(user2.posts[0]);

user1.comment(user3.posts[0], "Đúng rồi");

user1.viewFeed();
