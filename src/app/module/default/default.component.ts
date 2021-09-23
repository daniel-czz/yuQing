import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isCollapsed = false; //布局的常数

  constructor() { }

  ngOnInit(): void {
  }

}
