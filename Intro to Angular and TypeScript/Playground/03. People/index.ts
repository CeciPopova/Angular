abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: string[];

    dividend: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0,
        this.dividend = 0,
        this.tasks = []
    }

    public work(): void {
        let currentTask = this.tasks.shift();
        if (currentTask) {
            this.tasks.push(currentTask);
        }
       

        console.log(`${this.name} is ${currentTask}`);
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this mounth.`);
    }

    getSalary(): number{
        return this.salary + this.dividend;
    }
}
function company() {
    class Junior extends Employee {
        constructor(name: string, age: number) {
            super(name, age);
            this.tasks.push(" is working on a simple task.");
        }
    }

    class Senior extends Employee {
        constructor(name: string, age: number) {
            super(name, age);
            this.tasks.push(" is working on a complicated task.");
            this.tasks.push(" is taking time off work.");
            this.tasks.push(" is supervising junior workers.");
        }
    }

    class Manager extends Employee {

        constructor(name: string, age: number) {
            super(name, age);
            this.tasks.push(" scheduled a meeting.");
            this.tasks.push(" is preparing a quarterly report.");
        }
       
    }

    return { Junior, Senior, Manager };
}

const people = company();

const junior = new people.Junior('Ivan', 23);

junior.work();
junior.work();

junior.salary = 1200;

junior.collectSalary();

const senior = new people.Senior('Maria', 38);

senior.work();
senior.work();
senior.work();

senior.salary = 12345;

senior.collectSalary();

const manager = new people.Manager('Rado', 44);

manager.work();
manager.work();

manager.salary = 45000;
manager.dividend = 12000;
manager.collectSalary();


