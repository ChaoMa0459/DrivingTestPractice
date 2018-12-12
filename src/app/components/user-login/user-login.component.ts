import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';

import { Subscription} from "rxjs";
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(public userLoginService: UserLoginService) { }

  user: object;

  ngOnInit() {

  }


  username = '';
  password = '';
  login = false;

  onAddUser(form: NgForm){
    if(form.invalid){
      return;
    }
    this.username = form.value.username;
    this.password = form.value.password;
    // const user: User = {

    //   username: form.value.username,
    //   password: form.value.password,
    //   userType: form.value.userType
    // };
    // console.log(user)
    // this.questionService.addQuestion(question);
    this.userLoginService.getUser(this.username).subscribe((data: object) => {

      this.user = data;
      console.log('this.questions:', this.user);

      if (Object.keys(data).length != 0 && this.password === data[0].password) {
        this.login = true;
        alert('Login Success!');
      }else{
        alert('Wrong username or password.')
      }

    });

  }

}
