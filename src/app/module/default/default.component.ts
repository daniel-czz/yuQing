import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconService } from 'ng-zorro-antd/icon';
import { LocalstorageService } from 'src/app/service/localstorage.service';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isCollapsed = true; //布局的常数

  constructor(private iconService: NzIconService,
              private localstorage: LocalstorageService,
              private router: Router) { 
      this.iconService.fetchFromIconfont({
        scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
      });
  }

  ngOnInit(): void {
  }

  logout(){
    if(confirm("i am ready to log out")){
      if(this.localstorage.get("userInfo")){
        this.localstorage.remove("userInfo");
        this.router.navigate(['/login']);
      }
    }
  }

}
