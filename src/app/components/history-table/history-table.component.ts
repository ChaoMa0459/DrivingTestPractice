import { Component, OnInit } from '@angular/core';
import { Result } from './history-table.model';
import { ResultListService } from './history-table.service';
import { Subscription } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {

  data: object;
  displayedColumns: string[] = ['position', 'rightNum', 'totalNum', 'percentage'];
  dataSource = [];
  // username = 'kai';
  username:string;

  constructor(public resultService: ResultListService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => this.username = params.username);

    if(this.username === "undefined"){
      alert("please login first");
      this.router.navigateByUrl('/');
    }

    this.resultService.getResultList(this.username).subscribe((data: object) => {

      this.data = data;
      console.log('this.data:', this.data);
      this.convertData(data);

    });
  }

  convertData(data: object): any {

    for (var i = 0; i < Object.keys(data).length; i++) {
      var resItem = {
        'position': i + 1,
        'rightNum': this.data[i].rightNum,
        'totalNum': this.data[i].totalNum,
        'percentage': this.data[i].rightNum / this.data[i].totalNum,
      };
      this.dataSource[i] = resItem;
    }
    console.log('this.dataSource: ', this.dataSource);
  }

}
