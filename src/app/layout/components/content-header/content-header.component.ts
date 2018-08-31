import { UpdateHostClassService } from './../../../shared/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.less'],
  providers: [UpdateHostClassService]
})
export class ContentHeaderComponent implements OnInit {
  constructor(
  ) {

  }
  ngOnInit() {

  }

}