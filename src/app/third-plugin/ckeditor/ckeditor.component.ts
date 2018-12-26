import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.less']
})
export class CkeditorComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit() {
    console.log('ckeditor init')
  }

  ngOnDestroy(): void {
    console.log('ckeditor destory')
  }
  _onReuseInit() {
    console.log('ckeditor _onReuseInit')
  }

  _onReuseDestroy() {
    console.log('ckeditor _onReuseDestroy')
  }
}
