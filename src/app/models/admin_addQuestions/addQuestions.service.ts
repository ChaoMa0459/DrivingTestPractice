import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

import { Question } from "./addQuestions.model";

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  private questions: Question[] = [];
  private questionsUpdate = new Subject<Question[]>()

  // getQuestions(){
  //   return [...this.questions];
  // }

  getQuestionUpdateListener(){
    return this.questionsUpdate.asObservable();
  }

  addQuestion(question: Question){
    this.questions.push(question);
    this.questionsUpdate.next([...this.questions]);
  }
}
