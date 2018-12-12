import {Component, OnInit} from '@angular/core';

import { Question } from "../addQuestions.model";
import {NgForm} from "@angular/forms";
import {AddQuestionService} from "../addQuestions.service";

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {

  constructor(public questionService: AddQuestionService) { }

  ngOnInit() {
  }

  questionTitle = '';
  selectionA = '';
  selectionB = '';
  selectionC = '';
  selectionD = '';


  onAddQuestion(form: NgForm){
    if(form.invalid){
      return;
    }
    const question: Question = {
      title: form.value.questionTitle,
      selectionA: form.value.selectionA,
      selectionB: form.value.selectionB,
      selectionC: form.value.selectionC,
      selectionD: form.value.selectionD,
      answer: form.value.answer
    }
    console.log(question)
    this.questionService.addQuestion(question);
  }
}
