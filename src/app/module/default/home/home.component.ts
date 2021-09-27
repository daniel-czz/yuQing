import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //highcharts表格-------------------------------------------------------------
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
				plotBackgroundColor: undefined,
				plotBorderWidth: undefined,
				plotShadow: false,
				type: 'pie'
		},
		title: {
				text: '2021年舆情占比分析'
		},
		tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
				pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
								enabled: true,
								format: '<b>{point.name}</b>: {point.percentage:.1f} %',
								style: {
										color:  'black'
								}
						}
				}
		},
		series: [{
        type: "pie", // 在angular里 要定义
				name: 'Brands',
				colorByPoint: true,
				data: [{
						name: 'Chrome',
						y: 61.41,
						sliced: true,
						selected: true
				}, {
						name: 'Internet Explorer',
						y: 11.84
				}, {
						name: 'Firefox',
						y: 10.85
				}, {
						name: 'Edge',
						y: 4.67
				}, {
						name: 'Safari',
						y: 4.18
				}, {
						name: 'Sogou Explorer',
						y: 1.64
				}, {
						name: 'Opera',
						y: 1.6
				}, {
						name: 'QQ',
						y: 1.2
				}, {
						name: 'Other',
						y: 2.61
				}]
		}]
  };

  chartOptions2: Highcharts.Options = {
    chart: {
        type: 'column'
    },
    title: {
        text: '2021年舆情分析'
    },
    subtitle: {
        text: '数据截止 2017-03，来源: <a href="https://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45  // 设置轴标签旋转角度
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '人口 (百万)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '人口总量: <b>{point.y:.1f} 百万</b>'
    },
    series: [{
        type: 'column',
        name: '总人口',
        data: [
            ['Jan', 24.25],
            ['Feb', 23.50],
            ['Mar', 21.51],
            ['Apr', 16.78],
            ['May', 16.06],
            ['Jun', 15.20],
            ['Jul', 14.16],
            ['Aug', 13.51],
            ['Sep', 13.08],
            ['Oct', 12.44],
            ['Nov', 12.19],
            ['Dec', 12.03],
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.0f}', // :.1f 为保留 1 位小数
            y: 10
        }
    }]
  }



  constructor() { }

  ngOnInit(): void {
  }

}
