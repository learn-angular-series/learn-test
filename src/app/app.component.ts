import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  let user={
    name:'damoqiongqiu',
    age:18,
    work:'写代码'
  };

  user.name="dog";
}
