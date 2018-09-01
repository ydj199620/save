import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.css']
// })
// export class FooterComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
@Component({
  selector: 'app-footer',
  template: `<div>
    <p>Without JSON pipe:</p>
    <pre>{{object}}</pre>
    <p>With JSON pipe:</p>
    <pre>{{object | json}}</pre>
  </div>`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
