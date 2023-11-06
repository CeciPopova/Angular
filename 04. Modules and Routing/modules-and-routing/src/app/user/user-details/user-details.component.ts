import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  constructor(private activeRoute: ActivatedRoute) {
    // * static way
    console.log('snapshot.data', this.activeRoute.snapshot.data['user']);

    // * dynamic way
    this.activeRoute.params.subscribe((v) =>
      console.log('params.subscribe', v)
    );
  }
}
