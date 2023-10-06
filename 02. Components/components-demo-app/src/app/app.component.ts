import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [
  //  `
   /* div { */
    /* background: pink; */
   /* } */
   /* `, */
  // ]
})
export class AppComponent {
  title = 'title from appComponent';

  users = [
    { name: 'Mitko', age: 21 },
    { name: 'Pesho', age: 22 },
    { name: 'Mariika', age: 13 },
    { name: 'Katia', age: 19 },
    
  ];

  onTestOutput(event: Event) {
    console.log('onTestOutput');
    console.log(event);
  }
}
