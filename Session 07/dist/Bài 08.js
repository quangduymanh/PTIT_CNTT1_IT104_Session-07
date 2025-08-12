"use strict";
class Account {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
        this.history = [];
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Số tiền nạp phải lớn hơn 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ số dư để rút");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}`);
    }
    getBalance() {
        return this.balance;
    }
    getHistory() {
        console.log("Lịch sử giao dịch:");
        this.history.forEach((h) => console.log(h));
    }
}
class CheckingAccount extends Account {
    constructor(initialBalance, overdraftLimit) {
        super(initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Vượt quá hạn mức thấu chi");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút (thấu chi): -${amount}`);
    }
}
const acc = new CheckingAccount(1000, 500);
acc.deposit(300);
acc.withdraw(500);
acc.withdraw(1000);
acc.withdraw(2000);
console.log("Số dư hiện tại:", acc.getBalance());
acc.getHistory();
