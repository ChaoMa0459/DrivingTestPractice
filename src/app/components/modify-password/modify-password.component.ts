import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModifyPasswordService } from './modify-password.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.scss']
})
export class ModifyPasswordComponent implements OnInit {

  constructor(public modifyPasswordService: ModifyPasswordService) { }

  ngOnInit() {
  }

  userId = ''

  updateUser(form: NgForm){
    if(form.invalid){
      return;
    }

    const user = {
      userId: this.userId ,
      // username: form.value.username,
      password: form.value.nPassword,
      // emailID: form.value.emailID,
    };
    console.log(user);

    this.modifyPasswordService.updateUser(user, this.userId);
    alert('success!');
  }
}
