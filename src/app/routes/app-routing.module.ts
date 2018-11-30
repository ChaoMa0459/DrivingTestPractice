import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddQuestionsComponent } from '../models/admin_addQuestions/admin-add-questions/admin-add-questions.component';
import { QuestionListComponent } from '../models/question-list/question-list.component';

const routes: Routes = [
  {
    path: 'addQuestions',
    component: AdminAddQuestionsComponent

  },
  {
    path: 'answerQuestions',
    component: QuestionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
