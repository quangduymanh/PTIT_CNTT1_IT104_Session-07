"use strict";
class Account {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Số tiền nạp phải lớn hơn 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount}`);
        console.log(`Nạp thành công ${amount}. Số dư hiện tại: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Số dư không đủ để rút");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}`);
        console.log(`Rút thành công ${amount}. Số dư hiện tại: ${this.balance}`);
    }
    showHistory() {
        console.log("📜 Lịch sử giao dịch:");
        this.history.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (this.balance - amount < 0) {
            console.log("Không thể rút, số dư không đủ");
            return;
        }
        super.withdraw(amount);
    }
}
const acc1 = new SavingAccount("123456", 1000, 0.05);
acc1.deposit(500);
acc1.withdraw(300);
acc1.withdraw(1500);
acc1.showHistory();
