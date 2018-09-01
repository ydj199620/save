import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  title:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
	goAdd(){
		this.router.navigate(['/add',{title:'添加联系人'}])
	}
}
