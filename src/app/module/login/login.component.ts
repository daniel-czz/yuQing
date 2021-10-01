import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public httpService: HttpService, public router: Router) { }

  ngOnInit(): void {
    // this.getCaptCha();
  }

  //因为带去文件需要时间，加入我们把调取图片的功能放在ngOnInit中我有可能看不到图片。所以我们把调取图片的方法放在ngAfterContentInit中。（ngAfterContentInit会在ngOnInit之后运行。）
  ngAfterContentInit(): void{ 
    this.getCaptCha();
  }

  //验证图片
  CaptChaData= {
    svgImg: "",
  }

  //登录信息
  loginData= {
    username:"",
    password:"",
    verify:"",
    svgKey: "",
  }


  getCaptCha(){ 
    var api= "http://yuqing.itying.com/api/captcha";
    this.httpService.get(api).then((response: any)=>{
      console.log(response);
      this.CaptChaData.svgImg = response.data.svgImg;
      this.  loginData.svgKey = response.data.svgKey;

      //把一个svg图片放到html文件中，绑定id=svgImg
      var svgImgDom: any = document.querySelector("#svgImg");//对用html 的id=svgImg  
      svgImgDom.innerHTML = this.CaptChaData.svgImg;

    })
  }

  //admin 123456 bug: 验证码必须一次输入正确 假如不更新就再次输入就算正确也不能login 
  doLogin(){
     var api= "http://yuqing.itying.com/api/doLogin";
    this.httpService.post(api, this.loginData).then((response: any)=>{
      console.log(response);
      if (response.data.success){
         this.router.navigate(['/default'])
      }else{
        alert(response.data.message);
      }
    })
    

  }
}
