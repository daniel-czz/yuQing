import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/service/localstorage.service';


@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {

  constructor(public  localstorage: LocalstorageService) { }

  ngOnInit(): void {
    if(this.localstorage.get("listData")){
      this.listData = this.localstorage.get("listData");
    }
    
  }

  key = {
  keyword: "",
  may_keyword: "",
  nokeyword: "",
  frequency: "",
};

listData: any= [{
  keyword: "1",
  may_keyword: "1",
  nokeyword: "1",
  frequency: "1",
}];
  
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

}
