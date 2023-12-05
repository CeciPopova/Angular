import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_IMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  appEmailDomains = DEFAULT_IMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm): void {
    console.log(form.value);

    if (form.invalid) {
      return;
    }
    
    this.userService.login();
    this.router.navigate(['/']);
  }

}
