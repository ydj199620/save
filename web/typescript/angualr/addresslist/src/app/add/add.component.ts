import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title:string
  constructor(private router:Router,private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.title = this.activatedRouter.snapshot.params['title'];
  }

}
