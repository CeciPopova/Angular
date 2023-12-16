import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user = {
    name: 'Pesho',
    age: 12,
    list: [1, 2, 3, 4, 5, 6, 7, 8],
  };

  sum(a: number, b: number): number {
    return a + b;
  }

  addProperty(): void {
    (this.user as any)['test123'] = 'test1234';
    console.log(this.user);
  }

  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 3000);
  });

  time$ = interval(1000).pipe(map(() => new Date()));
  //! $ shows that this is observable

  constructor(private userService: UserService) {}

  users$ = this.userService.userObs$;

  ngOnInit(): void {
  //  this.userService.loadUsers().subscribe({
    // next: console.log,
    // error: (err) => {
      // console.log(`Error from appComponent: ${err}`)
    // },
   //});
  }

  reloadUsers(): void {
    this.userService.loadUsers();
  }
}
