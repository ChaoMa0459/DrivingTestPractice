import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  position: number;
  rightNum: number;
  totalNum: number;
  percentage: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, rightNum: 5, totalNum: 20, percentage: 0.6},
  {position: 2, rightNum: 10, totalNum: 30, percentage: 0.9},
  {position: 3, rightNum: 20, totalNum: 40, percentage: 1},
];

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'rightNum', 'totalNum', 'percentage'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
