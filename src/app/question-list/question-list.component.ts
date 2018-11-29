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

      // "use strict";
      this.questions = [
        {
          "questionText": "Why is the sky blue?", "answers": [
            { "answerText": "blah blah 1", "correct": true },
            { "answerText": "blah blah 2", "correct": false },
            { "answerText": "blah blah 3", "correct": false }
          ]
        },
        {
          "questionText": "Why is the meaning of life?", "answers": [
            { "answerText": "blah blah 1", "correct": true },
            { "answerText": "blah blah 2", "correct": false },
            { "answerText": "blah blah 3", "correct": false }
          ]
        },
        {
          "questionText": "How many pennies are in $10.00?", "answers": [
            { "answerText": "1,000.", "correct": true },
            { "answerText": "10,000.", "correct": false },
            { "answerText": "A lot", "correct": false }
          ]
        },
        {
          "questionText": "What is the default program?", "answers": [
            { "answerText": "Hello World.", "correct": true },
            { "answerText": "Hello Sunshine.", "correct": false },
            { "answerText": "Hello my ragtime gal.", "correct": false }
          ]
        }
      ];
      this.answers = {};
      this.correctCount = 0;
  }

  showResult(): void {
    console.log("Submit button clicked");
    this.correctCount = 0;
    var qLength = Object.keys(this.questions).length;
    for (var i = 0; i < qLength; i++) {
      var answers = this.questions[i].answers;
      this.questions[i].userAnswerCorrect = false;
      this.questions[i].userAnswer = this.answers[i];
      for (var j = 0; j < answers.length; j++) {
        answers[j].selected = "donno";
        // never go into if condition
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
    console.log(this.correctCount);
    console.log(Object.keys(this.questions).length);
    //console.log(this.answers);

};

}
