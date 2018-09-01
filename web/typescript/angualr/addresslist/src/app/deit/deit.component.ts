import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
import { UserService } from '../service/UserService'
@Component({
  selector: 'app-deit',
  templateUrl: './deit.component.html',
  styleUrls: ['./deit.component.css']
})
export class DeitComponent implements OnInit {
  title:string;
  id:string;
  user:any;
  constructor(private router:Router,private activatedRouter:ActivatedRoute,private userS:UserService) { }

  ngOnInit() {
    this.title=this.activatedRouter.snapshot.params['title']
    this.id=this.activatedRouter.snapshot.params['id']
    this.getUserById(this.id)
  }
	getUserById(id){
		this.userS.getUserById(id).subscribe(
			jieguo=>this.user = jieguo
		)
	}
}
