import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  constructor( public httpService: HttpService) { }

  ngOnInit(): void {
    this.getData()
  }

  apiKey: string= `e2ef6b0cad5283400fb8d5ae597481b4`;
  covidData: any= {};


  getData(){
    var api: string= `http://api.tianapi.com/txapi/ncovabroad/index?key= + ${this.apiKey}`
    console.log(api);
    this.httpService.get(api).then((response: any)=> {
      console.log(response);
      this.covidData = response.data.newslist;
    })
    }
    
  

}
