import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-input-select2',
  templateUrl: './input-select2.component.html',
  styleUrls: ['./input-select2.component.less']
})
export class InputSelect2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('select2 init')
  }

  ngOnDestroy(): void {
    console.log('select2 destory')
  }

}
