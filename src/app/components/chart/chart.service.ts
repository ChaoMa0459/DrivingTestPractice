import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Result } from './result.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  uri = 'http://localhost:4000/history'
  private results: Result[] = [];
  private userUpdate = new Subject<Result[]>()

  constructor(private http: HttpClient) { }

  getResultList(username){
    return this.http.get(`${this.uri}/${username}`);
  }

}
