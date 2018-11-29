import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent
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
