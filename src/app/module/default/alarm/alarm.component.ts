import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { HttpService } from 'src/app/service/http.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {

  
  constructor(public localstorage: LocalstorageService,
              public httpService: HttpService,
              private message: NzMessageService) { 
                this.userInfo = this.localstorage.get("userInfo");
                
              }

  ngOnInit(): void {
    this.getContact()
  }

  alarmInfo: any={}

  userInfo: any= {};

  createMessage(type: string): void {
    this.message.create(type, `Update ${type}`);
  }
  
  // 获取alarm联系信息
  getContact(){
    var api: string = "http://yuqing.itying.com/api/alarmList";
     this.httpService.get(api, {
      auth: {
        username: this.userInfo.token,
        password:"",
      }
    }).then((response: any)=>{
        console.log("this is the getContact response ")
        console.log(response);
         if(response.data.success == true){
            this.alarmInfo = response.data.result;
         }
    })

  }

  updateContact(){
    var api: string = "http://yuqing.itying.com/api/editAlarm";
     this.httpService.post(api, this.alarmInfo, {
      auth: {
        username: this.userInfo.token,
        password:"",
      }
    }).then((response: any)=>{
        console.log("this is the UpdateContact response")
        console.log(response);
        if (response.data.success==true){
          this.createMessage('success');
          this.getContact();
        }else{
          this.createMessage('Error');
        }
        
    })
  }


}
