import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { EChartOption } from 'echarts';
// import { gexf } from 'echarts/extension/dataTool';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  data: object;
  displayedColumns: string[] = ['position', 'rightNum', 'totalNum', 'percentage'];
  // position = [];
  // percentage = [];
  // username = 'kai';

  username:string;
  options = {};


  // mergeOption: any;
  // loading = false;
  //
  // graphOption: Observable<EChartOption>;

  constructor(public chartService: ChartService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.username = params.username);
    if(this.username === "undefined"){
      alert("please login first");
      this.router.navigateByUrl('/');
    }

    let position = new Array();
    let percentage = [];

    this.chartService.getResultList(this.username).subscribe((data: object) => {

      this.data = data;
      console.log('this.data:', this.data);

      for (let i = 0; i < Object.keys(data).length; i++) {

          position.push(i+1);


        percentage.push(data[i].rightNum / data[i].totalNum);

      }


      this.options = {
        title : {
          text: 'Test Score Line Chart',
          subtext: 'Correct rate'
        },
        backgroundColor: '#FBFBFB',
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['correct rate']
        },

        calculable : true,


        xAxis : [
          {
            axisLabel:{
              rotate: 30,
              interval:0
            },
            axisLine:{
              lineStyle :{
                color: '#CECECE'
              }
            },
            type : 'category',
            boundaryGap : false,
            data : position

          }
        ],
        yAxis : [
          {

            type : 'value',
            axisLine:{
              lineStyle :{
                color: '#CECECE'
              }
            }
          }
        ],
        series : [
          {
            name:'correct rate',
            type:'line',
            symbol:'none',
            smooth: 0.2,
            color:['#66AEDE'],
            data:
              percentage

          }

        ]
      };

    });



  }





  // convertData(data: object): any {
  //
  //   for (var i = 0; i < Object.keys(data).length; i++) {
  //     this.position.push(i+1);
  //     this.percentage.push(this.data[i].rightNum / this.data[i].totalNum);
  //
  //   }
  //   console.log(this.position, this.percentage);
  // }




}
