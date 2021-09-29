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
    this.listData = this.localstorage.get("listData")
  }

  key = {
  keyword: "",
  may_keyword: "",
  nokeyword: "",
  frequency: "",
}
listData: any= [];
  
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  addKeyWords(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.listData.push(this.key);
      this.localstorage.set("listData", this.listData);
      this.key = {
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
