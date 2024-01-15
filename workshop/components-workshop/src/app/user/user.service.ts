import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(email: string, password: string) {
    // this.user = {
      // email: 'john.doe@gmail.com',
      // firstName: 'John',
      // phoneNumber: '885 888 888',
      // password: '******'
    // };
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    

    return this.http.post('/api/login', { email, password});

  }

  register(username: string, email: string, password: string, rePassword: string, tel: string) {
   
    return this.http.post('/api/register', { username, email, password, rePassword, tel});
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}