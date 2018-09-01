import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
	isShow = true;

	public imgToggle():void{
		this.isShow= !this.isShow;
	}
  constructor() { }

  ngOnInit() {
  }

}
