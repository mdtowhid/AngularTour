import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour';
  post = {
    title: 'Title',
    likes: 50
  };

  onChangeFunc(args){
    console.log(args);
  }
}
