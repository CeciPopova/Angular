import { Component } from '@angular/core';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';

  users: User[] = [
    {name: 'Ivan', age: 21},
    {name: 'Mitko', age: 28}, 
    {name: 'Pesho', age: 16}, 
    {name: 'Penka', age: 56},
  ];

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    };

    this.users.push(user);

    inputName.value = '';
    inputAge.value = '';
  }
}
