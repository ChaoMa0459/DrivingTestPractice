import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModifyPasswordService {



    uri = 'http://localhost:4000/modifyPassword'

  constructor(private http: HttpClient) { }



  updateUser(user, userId){
    this.http
      .put(
        "http://localhost:4000/modifyPassword/"+ userId,
        user
      )
      .subscribe(
        val => {
          console.log("Put call successful value returned in body", val);
        },
        error => {
          console.log("Put call in error", error);
        },
        () => {
          console.log("The PUT observable is now completed.");
        }
      );
  }
}
