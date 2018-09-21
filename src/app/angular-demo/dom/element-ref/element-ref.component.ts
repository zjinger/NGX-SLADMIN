import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.less']
})
export class EelementRefComponent implements OnInit {
  //类似于jQuery 中的id 查找器
  @ViewChild('viewDiv', { read: ElementRef }) viewDiv: ElementRef;

  constructor() { }

  ngOnInit() {
    //console.log(this.viewDiv);
    //console.log(this.viewDiv.nativeElement);
    //console.log(this.viewDiv.nativeElement.style.width = '100px');
    //console.log(this.viewDiv.nativeElement.style.height = '100px');
    //console.log(this.viewDiv.nativeElement.style.border = "1px solid red")
  }

}
