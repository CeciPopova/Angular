import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [
   `
   div {
    background: pink;
   }
   `,
  ]
})
export class AppComponent {
  title = 'title from appComponent';
}
