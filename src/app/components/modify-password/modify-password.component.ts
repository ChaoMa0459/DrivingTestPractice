import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModifyPasswordService } from './modify-password.service'
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.scss']
})
export class ModifyPasswordComponent implements OnInit {

  username:string;
  user: object;
  userId = ''
  constructor(public modifyPasswordService: ModifyPasswordService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.username = params.username);

    if(this.username === "undefined"){
      alert("please login first");
      this.router.navigateByUrl('/');
    }

    this.modifyPasswordService.getUser(this.username).subscribe((data: object) => {

      this.user = data;
      console.log('this.questions:', data);
      this.userId = data[0]._id;

    });


  }



  updateUser(form: NgForm){
    if(form.invalid){
      return;
    }
    else if(form.value.nPassword !== form.value.rePassword || form.value.nPassword === form.value.oPassword){
      alert("please check input");
    }else {

      const user = {
        userId: this.userId,
        username: this.username,
        password: form.value.nPassword,
        // emailID: form.value.emailID,
      };
      console.log(user);

      this.modifyPasswordService.updateUser(user, this.userId);
      alert('success!');
    }
  }
}
