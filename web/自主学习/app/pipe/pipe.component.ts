import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
	today = new Date();
	jsonObject: Object = {firstname: 'bar', lastname: 'qux', address: {street: 'aaa', tel: [15054174655, 18701095471]}};
	
  constructor() { }

  ngOnInit() {
  }

}
