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
    
    this.getKeyWords();
    
    
    
  }

  key = {
    keyword: "",
    may_keyword: "",
    nokeyword: "",
    frequency: "",
  };

  editKey = {
    id:"",
    keyword: "",
    may_keyword: "",
    nokeyword: "",
    frequency: "",
  };

listData: any= {};

userInfo: any= {};
  
isAddVisible = false; //增加关键词
isModifyVisible = false; //编辑关键词
isOkLoading = false;




  showAddModal(): void {
    this.isAddVisible = true;
  }


  showModifyModal(dataId: any): void{
    this.isModifyVisible = true;
    var api = "http://yuqing.itying.com/api/oneKeywordsList?id="+ dataId; 
    this.httpService.get(api, {
      auth: {
        username: this.userInfo.token,
        password:"",
      }
    }).then((response: any)=>{
        // console.log("1111111");
        this.editKey = response.data.result;
        console.log(response);
    })
  }

   handleCancel(): void {
    this.isAddVisible = false;
    this.isModifyVisible = false;
  }

  addKeyWords(): void {
    
    console.log(this.key);
    this.isOkLoading = true;
    var api= "http://yuqing.itying.com/api/addKeywords";
    this.httpService.post(api, this.key, {
      auth: {
        username: this.userInfo.token,
        password:"",
      }
    }).then((response: any)=>{
        console.log(response);
        if(response.data.success == false){
          alert(response.data.message);
        }
        this.getKeyWords();
    })
    this.isAddVisible = false;
    this.isOkLoading = false;
    this.key = { //把key重新清空
        keyword: "",
        may_keyword: "",
        nokeyword: "",
        frequency: "",
      }
  }


  deleteKeyword(dataId: any){

    var flag = confirm("Do you comfirm to delete?")
    if(flag){
          var api= "http://yuqing.itying.com/api/deleteKeywords?id=" + dataId;
        this.httpService.get(api, {
          auth: {
            username: this.userInfo.token,
            password:"",
          }
        }).then((response: any)=>{
            console.log(response);
            this.getKeyWords();
        })
    }
    
  }

  //执行修改
  modifyKeyWords(){
    console.log(this.key);
    this.isOkLoading = true;
    var api= "http://yuqing.itying.com/api/editKEywords";
    this.httpService.post(api, this.editKey, {
      auth: {
        username: this.userInfo.token,
        password:"",
      }
    }).then((response: any)=>{
        console.log(response);
        if(response.data.success == false){
          alert(response.data.message);
        }
        this.getKeyWords();
    })
    this.isModifyVisible = false;
    this.isOkLoading = false;
    this.key = { //把key重新清空
        keyword: "",
        may_keyword: "",
        nokeyword: "",
        frequency: "",
      }
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
