import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions: object;
  answers: object;
  correctCount: number;
  
  constructor() { }

  ngOnInit() {

      this.questions = require('src/app/questions.json');
      this.answers = {}; // bind with the selected answers
      this.correctCount = 0; // count the number of correct answers
  }

  showResult(): void {
    this.correctCount = 0;
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
          console.log("correctCount++");
        } else if (this.questions[i].userAnswer === answers[j].answerText && answers[j].correct === false) {
          answers[j].selected = "false";
        }
      }
    }
    // console.log(this.correctCount);
    // console.log(Object.keys(this.questions).length);
    // console.log(this.answers);

};

}
