import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddQuestionsComponent } from '../components/admin_addQuestions/admin-add-questions/admin-add-questions.component';
import { QuestionListComponent } from '../components/question-list/question-list.component';
import {UserLoginComponent} from '../components/user-login/user-login.component';
import { UserRegistrationComponent } from '../components/user-registration/user-registration.component';

import { GoogleMapsComponent } from '../components/google-maps/google-maps.component';


import {AdminQuestionsListComponent} from "../components/admin-questions-list/admin-questions-list.component";
import { HistoryTableComponent } from "../components/history-table/history-table.component";

import {ModifyPasswordComponent} from "../components/modify-password/modify-password.component";

import {ChartComponent} from "../components/chart/chart.component";



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

  },
  {

    path: 'modify',
    component: ModifyPasswordComponent
  },
  {

    path: 'chart',
    component: ChartComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
