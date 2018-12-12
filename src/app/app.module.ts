import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatRadioModule } from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './models/question-list/question-list.component';
import { AddQuestionsComponent } from './models/admin_addQuestions/add-questions/add-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './models/header/header.component';
import { AddQuestionDisplayComponent } from './models/admin_addQuestions/add-question-display/add-question-display.component';
import { AdminAddQuestionsComponent } from './models/admin_addQuestions/admin-add-questions/admin-add-questions.component';
import { UserLoginComponent } from './models/user-login/user-login.component';
import { UserRegistrationComponent } from './models/user-registration/user-registration.component';
import { GoogleMapsComponent } from './models/google-maps/google-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    AddQuestionsComponent,
    HeaderComponent,
    AddQuestionDisplayComponent,
    AdminAddQuestionsComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    GoogleMapsComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
