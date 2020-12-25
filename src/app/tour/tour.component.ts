import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @Input() likes: number;
  @Input() post;

  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.change.emit({name: 'jane', age: 10});
  }

}
