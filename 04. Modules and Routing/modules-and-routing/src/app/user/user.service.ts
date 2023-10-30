import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  fetchUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
