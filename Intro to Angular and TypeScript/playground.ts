type User1 = {
    name: string;
    age: number;
}


interface User2  {
    name: string;
    age: number;
}

class UserTest implements User2 {
    name: string;
    age: number;

}