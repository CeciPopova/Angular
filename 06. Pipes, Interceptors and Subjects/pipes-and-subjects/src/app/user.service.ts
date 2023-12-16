import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubj$$ = new BehaviorSubject<Object | null>(null);
  

  public userObs$ = this.userSubj$$.asObservable();

  constructor(private http: HttpClient) { }

  loadUsers():void {
    this.userSubj$$.next(null);

    this.http.get('/api/users').subscribe({
      next: (users) => this.userSubj$$.next(users),
    });
  }
}


