import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/UserService';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	id:string;
	user:any;
  constructor(private router:Router,private activeActived:ActivatedRoute,private userSer:UserService) { }

  ngOnInit() {
  	this.id=this.activeActived.snapshot.params['id']
  	this.getUserById(this.id)
  }
  getUserById(id){
  	this.userSer.getUserById(id).subscribe(
  		jieguo=>this.user = jieguo
  	)
  }
  goedit(id){
    this.router.navigate(['/deit',{title:'编辑联系人',id:id}])
  }
  goback(){
    history.back()
  }
}
