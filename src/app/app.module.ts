import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatRadioModule,MatSidenavModule } from "@angular/material";
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './models/question-list/question-list.component';
import { AddQuestionsComponent } from './models/admin_addQuestions/add-questions/add-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddQuestionDisplayComponent } from './models/admin_addQuestions/add-question-display/add-question-display.component';
import { AdminAddQuestionsComponent } from './models/admin_addQuestions/admin-add-questions/admin-add-questions.component';
import { UserLoginComponent } from './models/user-login/user-login.component';
import { UserRegistrationComponent } from './models/user-registration/user-registration.component';
import { NavbarComponent } from './models/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    AddQuestionsComponent,
    AddQuestionDisplayComponent,
    AdminAddQuestionsComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    NavbarComponent
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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
