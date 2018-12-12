import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UserLoginComponent } from './components/user-login/user-login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  username = "a user"
  @ViewChild(UserLoginComponent) child;

  ngAfterViewInit() {
    console.log("child ", this.child);
    // this.username = this.child.username;
  }
}
