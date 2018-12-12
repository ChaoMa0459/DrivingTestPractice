import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  uri = 'http://localhost:4000/login'

  constructor(private http: HttpClient) { }

  // getQuestions(){
  //   return [...this.questions];
  // }

  // getQuestionUpdateListener(){
  //   return this.questionsUpdate.asObservable();
  // }

  getUser(username){
    return this.http.get(`${this.uri}/${username}`);
  }
}
