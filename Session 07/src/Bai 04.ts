abstract class Person{
    protected name: string;
    
    constructor (name: string){
        this.name = name;
    }
    public displayinfo(): void;
}
class Student extends Person {
    private id: string;
    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }
    public displayinfo(): void {
        console.log(`student ${this.id}, Name ${this.name}`);
    }
}
class Teacher extends Person {
    private subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}`);
    }
}