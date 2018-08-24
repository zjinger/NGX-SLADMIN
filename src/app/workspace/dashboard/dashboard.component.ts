import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  shouldShow = false;

  show() { this.shouldShow = true; }
  constructor() { }

  ngOnInit() {
  }

}
