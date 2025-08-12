class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    login(inputPassword: string): void {
        if (inputPassword === this.password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        } else {
            console.log("Sai mật khẩu");
        }
    }

    logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}

class UserAcc extends Account {
    public status: string;

    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }

    override login(inputPassword: string): void {
        if (this.status === "active") {
            super.login(inputPassword);
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}

const user1 = new UserAcc(1, "khanh", "123456", "user", "active");
const user2 = new UserAcc(2, "bang", "abcdef", "user", "banned");

user1.login("123456");
user1.logout();

user2.login("abcdef");
