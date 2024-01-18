import { Component } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-your',
  standalone: true,
  imports: [],
  templateUrl: './your.component.html',
  styleUrl: './your.component.css'
})
export class YourComponent {

  constructor(private popupService: PopupService) { }
  onOpen() {
    const msg = 'Are you sure you want to continue?';
    this.popupService.confirm(msg).subscribe((userHasConfirmed: boolean) => {

      if (userHasConfirmed) {
        console.log('User has confirmed!');
        //request to the server
      } else {
        console.log('User has decilined!');
      }
    })
    
  }
}
