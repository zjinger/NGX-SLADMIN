import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'angular-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.less']
})
export class TemplateRefComponent implements OnInit {

  @ViewChild('tpl') tpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    //console.log(this.tpl.elementRef);
    let embeddedView = this.tpl.createEmbeddedView(null);
    //console.log(embeddedView);
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let commentElement = this.tpl.elementRef.nativeElement;
    // 创建内嵌视图
    let embeddedView = this.tpl.createEmbeddedView(null);
    // 动态添加子节点
    embeddedView.rootNodes.forEach((node) => {
      commentElement.parentNode
        .insertBefore(node, commentElement.nextSibling);
    });
  }
}
