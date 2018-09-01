import { Component, OnInit } from '@angular/core';
import {Pronse} from '../data/data'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string="老韩你怎么那么飘"
  name:string="韩如花"
  sex:string="半男半女"
  pronse:Pronse = new Pronse()
  constructor() {
    this.pronse.name='韩似玉'
    this.pronse.age=100
    this.pronse.sex='看不透的性别'
   }

  ngOnInit() {
  }

}
