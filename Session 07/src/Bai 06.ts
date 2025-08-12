class Account {
    id: number;
    userName: string;
    password: string;
    isLogin: boolean;
    role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    login(password: string): void {
        if (this.password === password) {
            this.isLogin = true;
            console.log(`${this.userName} đã đăng nhập thành công`);
        } else {
            console.log("Sai mật khẩu!");
        }
    }

    logout(): void {
        this.isLogin = false;
        console.log(`${this.userName} đã đăng xuất`);
    }
}

class UserAcc extends Account {
    status: string;

    constructor(id: number, userName: string, password: string, status: string = "active") {
        super(id, userName, password, "user");
        this.status = status;
    }

    login(password: string): void {
        if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa!`);
            return;
        }
        super.login(password);
    }
}

class AdminAcc extends Account {
    constructor(id: number, userName: string, password: string) {
        super(id, userName, password, "admin");
    }

    banUser(user: UserAcc): void {
        user.status = "banned";
        console.log(`Admin ${this.userName} đã khóa tài khoản ${user.userName}`);
    }
}

let user1 = new UserAcc(1, "khanh", "1234");
let user2 = new UserAcc(2, "bang", "abcd");
let admin = new AdminAcc(100, "admin", "adminpass");

user1.login("1234");
user2.login("abcd");

admin.login("adminpass");
admin.banUser(user1);
user1.login("1234");
