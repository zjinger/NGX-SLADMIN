import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ViewContainerRef, Injector } from '@angular/core';

@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.less']
})
export class ViewContainerRefComponent implements OnInit, AfterViewInit {

  @ViewChild('tpl', { read: TemplateRef }) tpl: TemplateRef<void>;

  @ViewChild('vc', { read: ViewContainerRef }) viewContainer: ViewContainerRef;
  @ViewChild('vc', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
  constructor(
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //直接创建Embedded视图
    this.viewContainer.createEmbeddedView(this.tpl);
    //分两步，使用insert 方法，此方法可以插入Component
    // let view = this.tpl.createEmbeddedView(null);
    // this.viewContainer.insert(view);
  }


  dynamicComponent() {
    this.componentContainer.clear();
    // this.componentContainer.insert()
  }
}
