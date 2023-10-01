const num1 = 5;
const num2: number = 5;

const issOdd = false;
const issOdd2: boolean = false;

enum PaymentStatus {
    Failed,
    Successfull,
    Pending,
};

const PaymentStatus2 = {
    Failed: "Failed",
    Successfull: "Successful",
    Pending: "Pending",
};


class Human {
    speak() {
        console.log('hello');
    }
}

class Person extends Human {
    private name: string;
    age: number;
    
    constructor(name: string, age: number) {
        super();
        this.name = name;
        this.age = age;

    }
}

const personIvan = new Person('Ivan', 37);
personIvan.speak();



function getIdentity<T>(id: T) {
    console.log(id);
}