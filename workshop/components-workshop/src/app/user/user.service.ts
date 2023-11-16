import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    //* !! means if we have user return true, if we have NOT - false!
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: 'john.doe@gmail.com',
      firstName: 'John',
      phoneNumber: '885 888 888',
      password: '******'
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  register(): void {
    localStorage.getItem(JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
