import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  
  isActive = false;


  handleClick(): void {
    this.isActive = !this.isActive;
    console.log('Clicked!');
  }
}
