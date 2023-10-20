import { Component, OnInit } from '@angular/core';
import { User } from './types/JsonPlaceholder';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  appUsers: User[] = [];
  isLoading = true;

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users
  }

  ngOnInit() {
    // this.userService.getUsers().then((users) => {
      // this.appUsers = users;
      // //console.log(users);
      // this.isLoading = false;
    // });

    this.userService.getUsers().subscribe((users) => {
      this.appUsers = users;
      //console.log(users);
      this.isLoading = false;
    });
  }

  setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement): void {
    // do something
    this.userService.addUser(inputName, inputAge);
    this.appUsers = this.userService.users;
  }
}
