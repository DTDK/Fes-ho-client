import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  newListField: String = "New List Here";
  lists: Array<any> = [{
    id: 1,
    title: 'Clean Laundry Room',
    completed: 2,
    pending: 3
  }, {
    id: 2,
    title: 'Fix water heater',
    completed: 4,
    pending: 3
  }, {
    id: 3,
    title: 'Tuesday 13',
    completed: 2,
    pending: 13
  }];

  processing = false;
  feedbackEnabled = false;

  constructor() { }

  ngOnInit() {
  }
  

  submitForm(form) {}

}
