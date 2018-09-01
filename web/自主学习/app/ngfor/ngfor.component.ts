import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
	//水果列表和自我介绍
	list =['苹果','桃子','香蕉','菠萝'];
	name:string;
	address :Address;
	showSkills:boolean;
	skills:string[];
	
  constructor() {
  	this.name ="张三";
  	this.address = {
  		province:"山东",
  		city:"济南"
  	};
  	this.showSkills = false;
  	this.skills = ['Rreact',"JSOOP","Angularjs1.x","Angular4.x"];
  }

  ngOnInit() {
  }
}

interface Address{
		province:string;
		city:string;
}
