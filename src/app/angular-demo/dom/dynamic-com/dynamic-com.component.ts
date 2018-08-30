import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';
import { HostDirective } from '../../../shared/directives';
import { EelementRefComponent } from '../element-ref/element-ref.component';
import { TemplateRefComponent } from '../template-ref/template-ref.component';
import { ViewContainerRefComponent } from '../view-container-ref/view-container-ref.component';

@Component({
  selector: 'app-dynamic-com',
  templateUrl: './dynamic-com.component.html',
  styleUrls: ['./dynamic-com.component.less']
})
export class DynamicComComponent implements OnInit {

  @ViewChild('containerHost', { read: ViewContainerRef }) containerHost: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }
  //加载组件  
  loadComponent(type: string) {
    let component = this.getComponent(type);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)
    // let viewContainerRef = this.comHost.viewContainerRef;
    this.containerHost.clear();
    let componentRef = this.containerHost.createComponent(componentFactory);
    console.log(componentRef.instance);
  }

  getComponent(type: string): Type<{}> {
    if (type == 'element') {
      return EelementRefComponent
    } else if (type == 'template') {
      return TemplateRefComponent
    } else if (type == 'container') {
      return ViewContainerRefComponent
    }
  }

}
