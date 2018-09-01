import { Component, OnInit,Input, Output , EventEmitter} from '@angular/core';
import { User } from '../user/user'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  user: string;
  age: number;
  @Output()
  child1:EventEmitter<User> =new EventEmitter<User>()
  a: User;
  getoff(name: string) {
    if (name == '刘备') {
      this.a = new User('刘备', 18)
      this.child1.emit(this.a)
    } else if (name == '关羽') {
      this.a = new User('关羽', 17)
      this.child1.emit(this.a)
    } else if (name == '张飞') {
      this.a = new User('张飞', 16)
      this.child1.emit(this.a)
    } else {
      this.a = new User('无', 0)
      this.child1.emit(this.a)
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
