import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  
constructor(public httpService: HttpService,
            public localstorage: LocalstorageService){ 
              this.userInfo = this.localstorage.get("userInfo");
            }

  ngOnInit(): void {
    this.getData();
    this.total = 20;
  }

  //日期筛选---------------------------------
  start_date = "";
  end_date = "";
  start_unix_date: number= 0;
  end_unix_date: number= 0;
  // date ="";

  //表格信息--------------------------------
  loading = false;
  total = 0; // 内容总数量 total=pagesize*页数 
  pageSize = 20; //每页显示的数量
  pageIndex = 1; //当前是第一页
  
  userInfo: any= {};
  listData : any= [];
  // listData = [];

  onQueryParamsChange(params: any){
    // console.log("this is the page info")
    console.log(params);
    console.log('we are in page' + params.pageIndex);
    this.pageIndex = params.pageIndex;
    this.getData();
  }

  getData(): void{
    this.loading =true;
    var api = `http://yuqing.itying.com/api/reportList?page=${this.pageIndex}&pageSize=${this.pageSize}&startTime=${this.start_unix_date}&endTime=${this.end_unix_date}`; 
    this.httpService.get(api, {
      auth: {
        username: this.userInfo.token,
        password:"",
      }
    }).then((response: any)=>{
        console.log("getdata response");
        this.listData = response.data.result;
        this.total = response.data.total;
        console.log(response);
        console.log(this.total);
        this.loading =false;
    })
  }

  //do search 
  doSearch(): void{
    console.log("start date: "+ this.start_date);
    console.log("end date: "+ this.end_date);
    var start = new Date(this.start_date);
    this.start_unix_date = start.getTime()/1000;
    var end = new Date(this.end_date);
    this.end_unix_date = end.getTime()/1000;
    // console.log("start unix date: "+ this.start_unix_date);
    // console.log("end unix date: "+ this.end_unix_date);
    this.getData();
  }

  //clear filter 
  doReset(): void{
    this.end_unix_date=0;
    this.start_unix_date=0;
    this.end_date = "";
    this.start_date = "";
    this.getData();
  }

}
