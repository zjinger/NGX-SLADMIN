import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html'
})
export class SubComponentComponent implements OnInit, AfterContentInit {
  public id: string;
  constructor() { }
  
  ngOnInit() {
  }
  ngAfterContentInit() {
  }
}
