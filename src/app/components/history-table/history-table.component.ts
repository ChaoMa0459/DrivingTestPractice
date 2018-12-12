import { Component, OnInit } from '@angular/core';
import { Result } from './history-table.model';
import { ResultListService } from './history-table.service';
import { Subscription } from "rxjs";


@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {

  data: object;
  displayedColumns: string[] = ['position', 'rightNum', 'totalNum', 'percentage'];
  dataSource = [];
  username = 'kai';

  constructor(public resultService: ResultListService) {

  }

  ngOnInit() {
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
