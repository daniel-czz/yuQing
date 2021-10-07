import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

//covid data interface
export interface covideInterface {
      modifyTime: number,
      continents: string,
      provinceName: string,
      currentConfirmedCount: number,
      confirmedCount: number,
      curedCount: number,
      deadCount: number,
      locationId: number,
      countryShortCode: string
}

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  constructor( public httpService: HttpService,) { }

  ngOnInit(): void {
    this.getData()
  }

  apiKey: string= `e2ef6b0cad5283400fb8d5ae597481b4`;
  covidData: covideInterface[] = [];


  listOfColumn = [
    // {
    //   title: 'continents',
    //   compare: null,
    //   priority: false
    // },
    // {
    //   title: 'provinceName',
    //   compare: null,
    //   priority: false
    // },
    {
      title: 'currentConfirmed',
      compare: (a: covideInterface, b: covideInterface) => a.currentConfirmedCount - b.currentConfirmedCount,
      priority: 4
    },
    {
      title: 'confirmed',
      compare: (a: covideInterface, b: covideInterface) => a.confirmedCount - b.confirmedCount,
      priority: 3
    },
    {
      title: 'cured',
      compare: (a: covideInterface, b: covideInterface) => a.curedCount - b.curedCount,
      priority: 2
    },
    {
      title: 'dead',
      compare: (a: covideInterface, b: covideInterface) => a.deadCount - b.deadCount,
      priority: 1
    },
  ];

  getData(){
    var api: string= `http://api.tianapi.com/txapi/ncovabroad/index?key= + ${this.apiKey}`
    console.log(api);
    this.httpService.get(api).then((response: any)=> {
      // console.log(response);
      this.covidData = response.data.newslist;
      console.log(this.covidData);
    })
    }
    
  

}
