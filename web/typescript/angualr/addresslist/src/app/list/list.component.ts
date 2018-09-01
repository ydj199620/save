import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import {UserService } from '../service/UserService'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title:string;
  users:any;
  id:number;
  constructor(private router:Router,private activatedRouter:ActivatedRoute,private uService:UserService) { }

  ngOnInit() {
    this.title = this.activatedRouter.snapshot.params['title'];
    console.log(this.title)
    this.uService.getUsers().subscribe(
      jieguo=>{this.users=jieguo}
    )
  }
  godetail(id){
    this.router.navigate(['/detail',{id:id}])
  }

}
