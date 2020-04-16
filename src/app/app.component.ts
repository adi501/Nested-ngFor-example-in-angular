import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  prop = [{name:'test 1', values:[1,2,3,4,5]},{name:'test 2', values:[5,6,7]},{name:'test 3', values:[1,2,3,4]}];
}
