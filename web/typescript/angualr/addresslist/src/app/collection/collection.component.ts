import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  title:string;
  constructor(private router:Router,private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.title = this.activatedRouter.snapshot.params['title']
    console.log(this.title)
  }

}
