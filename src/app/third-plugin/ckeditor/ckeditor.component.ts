import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.less']
})
export class CkeditorComponent implements OnInit {
  @ViewChild('popup') popup: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
    console.log(this.popup);
  }

}
