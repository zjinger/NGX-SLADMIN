import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.less']
})
export class ViewChildComponent implements OnInit {
  public type: number = 0;

  @ViewChild('view', { read: ElementRef }) view: ElementRef;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {

  }

  autoVerticalCenter(type: number) {
    //页面数据绑定
    this.type = type;
    //使用jquery 的方式
    // $(this.view.nativeElement).addClass(`container-${type}`);
    //使用render2
    // this.renderer2.addClass(this.view.nativeElement, `container-${this.type}`);
  }



}
