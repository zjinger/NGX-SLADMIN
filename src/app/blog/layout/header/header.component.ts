import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isScrolled: boolean = false;
  constructor() {
  }
  ngOnInit() {
  }
  scrolledChanged($event) {
    this.isScrolled = $event;
  }
}
