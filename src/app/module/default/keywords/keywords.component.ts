import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {

  constructor(public localstorage: LocalstorageService,
              public httpService: HttpService) { 
                this.userInfo = this.localstorage.get("userInfo");
                
              }

  ngOnInit(): void {
    this.listData = this.localstorage.get("listData");
    if(!this.localstorage.get("listData")){
      this.getKeyWords();
    }
    
    
  }

  key = {
  keyword: "",
  may_keyword: "",
  nokeyword: "",
  frequency: "",
};

listData: any= {};

userInfo: any= {};
  
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  addKeyWords(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      console.log(this.key);
      this.listData.push(this.key);
      this.localstorage.set("listData", this.listData);
      this.key = { //把key重新清空
        keyword: "",
        may_keyword: "",
        nokeyword: "",
        frequency: "",
      }
      this.isVisible = false;
      this.isOkLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  delete(index: any){
    //console.log("delete index # " + index + " "+ "item in list");
    this.listData.splice(index,1);
    this.localstorage.set('listData',this.listData);
    //console.log(this.localstorage.get("listData"));
  }

  //获取舆情关键词
  getKeyWords(){
    var api= "http://yuqing.itying.com/api/keywordsList"
    this.httpService.get(api,{
      auth: {
        username: this.userInfo.token,
        password:"",
      }
    }).then((response: any)=>{
        console.log(response);
        
        if(response.data.success == true){
                   this.listData = response.data.result;
         }
    })
  }

}
