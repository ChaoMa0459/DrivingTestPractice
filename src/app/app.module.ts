import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, 
  MatExpansionModule, MatRadioModule, MatTooltipModule, MatDialogModule,
  MatSidenavModule, MatIconModule, MatListModule, MatTableModule,MatMenuModule } from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { AddQuestionsComponent } from './components/admin_addQuestions/add-questions/add-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AddQuestionDisplayComponent } from './components/admin_addQuestions/add-question-display/add-question-display.component';
import { AdminAddQuestionsComponent } from './components/admin_addQuestions/admin-add-questions/admin-add-questions.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { GoogleMapsComponent } from './components/google-maps/google-maps.component';

import { AdminQuestionsListComponent } from './components/admin-questions-list/admin-questions-list.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { ModifyPasswordComponent } from './components/modify-password/modify-password.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    AddQuestionsComponent,
    AddQuestionDisplayComponent,
    AdminAddQuestionsComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    NavbarComponent,
    GoogleMapsComponent,
    AdminQuestionsListComponent,
    HistoryTableComponent,
    ModifyPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // module for ngModel
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNSN1xEQXCl-ChvLSkZ5r17uTrmMQqadg'
    }),
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
