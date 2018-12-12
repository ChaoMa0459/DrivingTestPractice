import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddQuestionsComponent } from '../components/admin_addQuestions/admin-add-questions/admin-add-questions.component';
import { QuestionListComponent } from '../components/question-list/question-list.component';
import {UserLoginComponent} from '../components/user-login/user-login.component';
import { UserRegistrationComponent } from '../components/user-registration/user-registration.component';

import { GoogleMapsComponent } from '../components/google-maps/google-maps.component';


import {AdminQuestionsListComponent} from "../components/admin-questions-list/admin-questions-list.component";
import { HistoryTableComponent } from "../components/history-table/history-table.component";


const routes: Routes = [
  {
    path: 'addQuestions',
    component: AdminAddQuestionsComponent

  },
  {
    path: 'answerQuestions',
    component: QuestionListComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'registration',
    component: UserRegistrationComponent
  },
  {

    path: 'maps',
    component: GoogleMapsComponent
  },
  {
    path: 'adminQuestionsList',
    component:  AdminQuestionsListComponent
  },
  {
    path: 'history',
    component:  HistoryTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
