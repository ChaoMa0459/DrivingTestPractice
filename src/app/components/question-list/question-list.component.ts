import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { QuestionList } from "./question-list.model";
import { QuestionListService } from './question-list.service';
import { Result } from '../history-table/history-table.model';
import { ResultListService } from '../history-table/history-table.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  data: object;
  questions = [];
  answers: object;
  correctCount: number;
  wrongCount: number;
  submitted = false;
  username = 'kai';

  constructor(public questionService: QuestionListService, public resultService: ResultListService) {
  }

  private questionsSub: Subscription;

  ngOnInit() {

    this.questionService.getQuestionList().subscribe((data: object) => {

      this.data = data;
      console.log('this.data:', this.data);
      this.convertData(data);

    });

    // this.questions = require('src/app/questions.json');

    this.answers = {}; // bind with the selected answers
    this.correctCount = 0; // count the number of correct answers
  }

  showResult(): void {
    this.correctCount = 0;
    this.wrongCount = 0;

    var qLength = Object.keys(this.questions).length;
    for (var i = 0; i < qLength; i++) {
      var answers = this.questions[i].answers;
      this.questions[i].userAnswerCorrect = false;
      this.questions[i].userAnswer = this.answers[i]; // record user answer

      for (var j = 0; j < answers.length; j++) {
        answers[j].selected = "donno";
        if (this.questions[i].userAnswer === answers[j].answerText && answers[j].correct === true) {
          this.questions[i].userAnswerCorrect = true;
          answers[j].selected = "true";
          this.correctCount++;
        } else if (this.questions[i].userAnswer === answers[j].answerText && answers[j].correct === false) {
          answers[j].selected = "false";
          this.wrongCount++;
        }
      }
    }
    this.submitted = true;
    // console.log(this.correctCount);
    // console.log(Object.keys(this.questions).length);
    console.log(this.answers);

    this.storeResult();

  };

  storeResult() {
    const result: Result = {
      username: this.username,
      rightNum: this.correctCount,
      totalNum: this.correctCount + this.wrongCount,
    };
    console.log("result", result);
    this.resultService.addResult(result);
  }

  convertData(data: object): any {

    for (var i = 0; i < Object.keys(data).length; i++) {
      var quesItem = {
        'title': this.data[i].title,
        'answers': [],
      };
      quesItem["answers"].push({
        "answerText": data[i].selectionA,
        "correct": data[i].answer === 'A'
      });
      quesItem["answers"].push({
        "answerText": data[i].selectionB,
        "correct": data[i].answer === 'B'
      });
      quesItem["answers"].push({
        "answerText": data[i].selectionC,
        "correct": data[i].answer === 'C'
      });
      quesItem["answers"].push({
        "answerText": data[i].selectionD,
        "correct": data[i].answer === 'D'
      });
      this.questions[i] = quesItem;
    }
    console.log('this.questions:', this.questions);
  }

}

