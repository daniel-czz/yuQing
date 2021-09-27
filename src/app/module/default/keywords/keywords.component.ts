import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {

key = {
  keyword: "",
  may_keyword: "",
  nokeyword: "",
  frequency: "",
}
listData = [
    {
      keyword: '大庆油田',
      may_keyword: '中国石油',
      nokeyword: "延长石油",
      frequency: '100'
    },
    {
      keyword: '数字人民币',
      may_keyword: 'dec',
      nokeyword: "",
      frequency: '100'
    },
  ];
  
  isVisible = false;
  isOkLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.listData.push(this.key);
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
