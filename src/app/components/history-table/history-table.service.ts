import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Result } from './history-table.model';

@Injectable({
  providedIn: 'root'
})
export class ResultListService {

  uri = 'http://localhost:4000/history'
  private results: Result[] = [];
  private userUpdate = new Subject<Result[]>()

  constructor(private http: HttpClient) { }

  getResultList(username){
    return this.http.get(`${this.uri}/${username}`);
  }

  addResult(result: Result){
    this.results.push(result);
    this.userUpdate.next([...this.results]);
    this.http.post(`${this.uri}/add`, result)
      .subscribe(res => console.log('Done'));
  }
}
