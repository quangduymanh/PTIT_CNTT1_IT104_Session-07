"use strict";
class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password) {
        if (this.password === password) {
            this.isLogin = true;
            console.log(`${this.userName} đã đăng nhập thành công`);
        }
        else {
            console.log("Sai mật khẩu!");
        }
    }
    logout() {
        this.isLogin = false;
        console.log(`${this.userName} đã đăng xuất`);
    }
}
class UserAcc extends Account {
    constructor(id, userName, password, status = "active") {
        super(id, userName, password, "user");
        this.status = status;
    }
    login(password) {
        if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa!`);
            return;
        }
        super.login(password);
    }
}
class AdminAcc extends Account {
    constructor(id, userName, password) {
        super(id, userName, password, "admin");
    }
    banUser(user) {
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
