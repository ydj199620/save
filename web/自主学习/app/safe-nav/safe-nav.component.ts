import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-nav',
  templateUrl: './safe-nav.component.html',
  styleUrls: ['./safe-nav.component.css']
})
export class SafeNavComponent implements OnInit {
	p1:Object = {name:'张三',sex:'男',age:'20'};
	p2:Object = "";
  constructor() { 
  	
  }

  ngOnInit() {
  }

}
