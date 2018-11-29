import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from "rxjs";

import { Question } from "../addQuestions.model";
import { AddQuestionService} from "../addQuestions.service";

@Component({
  selector: 'app-add-question-display',
  templateUrl: './add-question-display.component.html',
  styleUrls: ['./add-question-display.component.scss']
})
export class AddQuestionDisplayComponent implements OnInit, OnDestroy {

  constructor(public questionService: AddQuestionService) {
  }

  private questionsSub: Subscription;

  ngOnInit() {
    // this.questions = this.questionService.getQuestions();
    this.questionsSub = this.questionService.getQuestionUpdateListener()
      .subscribe((questions: Question[])=>{
        this.questions = questions;
      });
  }

  ngOnDestroy(){
    this.questionsSub.unsubscribe();
  }

  questions: Question[] = [];

}
