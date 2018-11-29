import { Component, OnInit, Input } from '@angular/core';

import { Question } from "../addQuestion.model";

@Component({
  selector: 'app-add-question-display',
  templateUrl: './add-question-display.component.html',
  styleUrls: ['./add-question-display.component.scss']
})
export class AddQuestionDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() questions: Question[] = [];


}
