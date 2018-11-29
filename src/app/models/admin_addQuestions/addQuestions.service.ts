import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient} from "@angular/common/http";

import { Question } from "./addQuestions.model";

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  private questions: Question[] = [];
  private questionsUpdate = new Subject<Question[]>()

  uri = 'http://localhost:4000/addQuestions'
  // constructor(
  //   private http: HttpClient,
  //    private messageService: MessageService) { }

  // getQuestions(){
  //   return [...this.questions];
  // }

  getQuestionUpdateListener(){
    return this.questionsUpdate.asObservable();
  }

  addQuestion(question: Question){
    this.questions.push(question);
    this.questionsUpdate.next([...this.questions]);
    // this.http.post(`${this.uri}/add`, question)
    //   .subscribe(res => console.log('Done'));
  }
}
