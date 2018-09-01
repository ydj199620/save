import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xianshi',
  templateUrl: './xianshi.component.html',
  styleUrls: ['./xianshi.component.css']
})
export class XianshiComponent implements OnInit {
  flag:boolean=true;
  week:number=2;
  constructor() { }

  ngOnInit() {
  }

}
