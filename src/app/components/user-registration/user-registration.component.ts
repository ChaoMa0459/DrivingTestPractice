import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';

import { Subscription} from "rxjs";
import { UserRegistrationService } from './user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(public userRegistrationService: UserRegistrationService) { }

  user: object;

  ngOnInit() {

  }

  username = '';
  password = '';
  rePassword = '';
  emailID = '';

  onAddUser(form: NgForm){
    if(form.invalid){
      return;
    }
    if(form.value.password !== form.value.rePassword){
      alert('please check input');
    }
    this.userRegistrationService.getUser(form.value.username).subscribe((data: object) => {

      this.user = data;
      // if(this.user === null)
      console.log(data);
      console.log(Object.keys(data).length === 0);

      if(Object.keys(data).length === 0){
        this.username = form.value.username;
        const user: User = {

          username: form.value.username,
          password: form.value.password,
          // emailID: form.value.emailID,
        };
        console.log(user);

        this.userRegistrationService.addUser(user);
        alert('success!');
      }else{
        alert('username is exist');
      }


    });


  }
}
