class Employee {
    public name: string;       
    protected company: string; 
    private phone: string;   

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone); 
        this.teamSize = teamSize;
    }

    public printInfo(): void {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}

const emp = new Employee("Trang", "Tech Corp", "0123456789");
emp.printInfo();

const manager = new Manager("Bình", "Tech Corp", "0987654321", 10);
manager.printInfo();
