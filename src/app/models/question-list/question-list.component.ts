import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { QuestionList } from "./question-list.model";
import { QuestionListService } from './question-list.service';

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

  constructor(public questionService: QuestionListService) {
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
        }
      }
    }
    // console.log(this.correctCount);
    // console.log(Object.keys(this.questions).length);
    console.log(this.answers);

  };

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

    // [
    //   {
    //     "questionText": "Why is the sky blue?", "answers": [
    //       { "answerText": "blah blah 1", "correct": true },
    //       { "answerText": "blah blah 2", "correct": false },
    //       { "answerText": "blah blah 3", "correct": false }
    //     ]
    //   }
    // ]

    // [
    //     {
    //         "_id": "5c008e8a2560dcf578c36b10",
    //         "title": "1 + 1 = ?",
    //         "selectionA": "1",
    //         "selectionB": "2",
    //         "selectionC": "3",
    //         "selectionD": "4",
    //         "answer": "B",
    //         "__v": 0
    //     }
    // ]
