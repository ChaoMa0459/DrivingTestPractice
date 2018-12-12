import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from "rxjs";
import { AdminQuestionsListService } from './admin-questions-list.service';
import { Question} from "./question.modle";
import {componentRefresh} from "@angular/core/src/render3/instructions";
import { Router } from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-admin-questions-list',
  templateUrl: './admin-questions-list.component.html',
  styleUrls: ['./admin-questions-list.component.scss']
})
export class AdminQuestionsListComponent implements OnInit {

  data: object;
  questions = [];
  answers: object;

  constructor(public adminQuestionService: AdminQuestionsListService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.adminQuestionService.getQuestionList().subscribe((data: object) => {

      this.data = data;
      console.log('this.data:', this.data);


    });
  }


  onUpdate(questionId, questionTitle, selectionA, selectionB, selectionC, selectionD, answer) {
    const question = {
      questionId: questionId,
      title: questionTitle,
      selectionA: selectionA,
      selectionB: selectionB,
      selectionC: selectionC,
      selectionD: selectionD,
      answer: answer
    }
    console.log(question);
    this.adminQuestionService.updateQuestion(question, questionId);
    alert("Update Successfully");
    // location.reload();
    this.adminQuestionService.getQuestionList().subscribe((data: object) => {

      this.data = data;
      console.log('this.data:', this.data);


    });
  }

  onDelete(questionId) {
    this.adminQuestionService.deleteQuestion(questionId);
    // this.router.navigateByUrl("/adminQuestionsList");
    alert("Delete Successfully");
    // location.reload();
    this.adminQuestionService.getQuestionList().subscribe((data: object) => {

      this.data = data;
      console.log('this.data:', this.data);


    });
  }
  ondisplay(answer){
    console.log(answer);
  }

}

