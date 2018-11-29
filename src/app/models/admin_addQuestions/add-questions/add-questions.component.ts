import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Question } from "../addQuestion.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questionTitle = '';
  selectionA = '';
  selectionB = '';
  selectionC = '';
  selectionD = '';

  @Output() questionCreate = new EventEmitter<Question>();

  onAddQuestion(form: NgForm){
    if(form.invalid){
      return
    }
    const question: Question = {
      title: form.value.questionTitle,
      selectionA: form.value.selectionA,
      selectionB: form.value.selectionB,
      selectionC: form.value.selectionC,
      selectionD: form.value.selectionD
    }
    this.questionCreate.emit(question);
  }
}
