import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './models/question-list/question-list.component';
import { AddQuestionsComponent } from './models/add-questions/add-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    AddQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // module for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
