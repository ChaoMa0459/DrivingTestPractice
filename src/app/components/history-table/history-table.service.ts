import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultListService {

  uri = 'http://localhost:4000/history'
  constructor(private http: HttpClient) { }

//   addResultList() {
//     return this.http.post(`${this.uri}/add`);
//   }

  getResultList(username){
    return this.http.get(`${this.uri}/${username}`);
  }
}
