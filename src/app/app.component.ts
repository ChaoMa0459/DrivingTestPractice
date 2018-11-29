import { Component } from '@angular/core';

import { Question} from "./models/admin_addQuestions/addQuestion.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storeQuestions: Question[] = [];

  onQuestionAdd(question){
    this.storeQuestions.push(question);
  }
}
