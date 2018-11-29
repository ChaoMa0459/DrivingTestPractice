import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

    private users: User[] = [];
    private userUpdate = new Subject<User[]>()
  
    uri = 'http://localhost:4000/registration'

  constructor(private http: HttpClient) { }

  getUserUpdateListener(){
    return this.userUpdate.asObservable();
  }

  addUser(user: User){
    this.users.push(user);
    this.userUpdate.next([...this.users]);
    this.http.post(`${this.uri}/add`, user)
      .subscribe(res => console.log('Done'));
  }
}