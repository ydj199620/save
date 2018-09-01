import { Component, OnInit } from '@angular/core';
import {User} from '../user/user'
@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  user1:User;
  jieshou(user:User){
    this.user1=user
  }
  constructor() { }

  ngOnInit() {
  }

}
