import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { QuestionList } from "./question-list.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionListService {

  uri = 'http://localhost:4000/answerQuestions'
  constructor(private http: HttpClient) { }

  // getQuestions(){
  //   return [...this.questions];
  // }

  // getQuestionUpdateListener(){
  //   return this.questionsUpdate.asObservable();
  // }

  getQuestionList(){
    return this.http.get(`${this.uri}/answer`);
  }
}
