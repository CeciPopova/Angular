import { Injectable } from '@angular/core';
import { User } from './types/JsonPlaceholder';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];
  // {name: 'Ivan', age: 21},
  // {name: 'Mitko', age: 28},
  // {name: 'Pesho', age: 16},
  // {name: 'Penka', age: 56},
  // ];

  constructor(private http: HttpClient) {
    // setInterval(() => {
    //  this.users.push({
    //  name: 'DemoName',
    //  age: 0,
    //  });
    //  //console.log('User has been added!');
    // }, 3000);
  }
  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // const user = {
    // name: inputName.value,
    // age: Number(inputAge.value),
    // };
    // this.users = [...this.users, user];

    inputName.value = '';
    inputAge.value = '';
  }

  getUsers() {
    // *PROMISE
    // const res = fetch('https://jsonplaceholder.typicode.com/users');
    // return (await res).json();

    // *OBSERVABLE
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
