import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddQuestionsComponent } from '../models/admin_addQuestions/admin-add-questions/admin-add-questions.component';

const routes: Routes = [
  {
    path: 'addQuestions',
    component: AdminAddQuestionsComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
