import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private UserService: UserService
  ) {
    console.log('snapshot.data', this.activeRoute.snapshot.data['user']);
    this.activeRoute.params.subscribe((v) =>
      console.log('params.subscribe', v)
    );
  }

  ngOnInit(): void {}
}
