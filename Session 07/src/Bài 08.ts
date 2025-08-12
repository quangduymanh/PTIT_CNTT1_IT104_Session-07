class Account {
    protected balance: number;
    protected history: string[];

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
        this.history = [];
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền nạp phải lớn hơn 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount}`);
    }

    withdraw(amount: number): void {
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

    getBalance(): number {
        return this.balance;
    }

    getHistory(): void {
        console.log("Lịch sử giao dịch:");
        this.history.forEach((h) => console.log(h));
    }
}

class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(initialBalance: number, overdraftLimit: number) {
        super(initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
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
