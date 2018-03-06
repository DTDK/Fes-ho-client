import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  processing = false;
  feedbackEnabled = false;
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

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) { }

}
