import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Question} from "./question.modle";
// import { QuestionList } from "./question-list.model";

@Injectable({
  providedIn: 'root'
})
export class AdminQuestionsListService {

  uri = 'http://localhost:4000/adminQuestionsList'
  constructor(private http: HttpClient) { }

  // getQuestions(){
  //   return [...this.questions];4
  // }

  // getQuestionUpdateListener(){
  //   return this.questionsUpdate.asObservable();
  // }

  getQuestionList(){
    return this.http.get(`${this.uri}`);
  }
  deleteQuestion(questionId){
    this.http
      .delete("http://localhost:4000/adminQuestionsList/"+questionId)
      .subscribe(
        val => {
          console.log("Delete call successful value returned in body", val);
        },
        error => {
          console.log("Delete call in error", error);
        },
        () => {
          console.log("The Delete observable is now completed.");
        }
      );
  }
  updateQuestion(question, questionId){
    this.http
      .put(
        "http://localhost:4000/adminQuestionsList/"+questionId,
        question
      )
      .subscribe(
        val => {
          console.log("Put call successful value returned in body", val);
        },
        error => {
          console.log("Put call in error", error);
        },
        () => {
          console.log("The PUT observable is now completed.");
        }
      );
  }
}
