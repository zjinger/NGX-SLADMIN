import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input,OnChanges, ComponentRef, OnDestroy, SimpleChanges  } from '@angular/core';
import { HostDirective } from '../../directives';
import { ComponentItem } from '../../models';

@Component({
  selector: 'app-dynamic-component-item',
  template: `
    <ng-template appHost></ng-template>
  `
})
export class DynamicComponentItemComponent implements OnInit, OnDestroy,OnChanges {

  //当前动态组件的index
  currentComponentIndex = -1;
  //当前的组件
  currentComponent: ComponentRef<any>;
  //传入的动态组件
  @Input() item: ComponentItem;
  //宿主
  @ViewChild(HostDirective) host: HostDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(this.item){
      //console.log('dynamic add');
      this.loadComponent();
    }
  }

  /**
   * 加载动态组件
   */
  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.componnet);
    //宿主容器
    let viewContainRef = this.host.viewContainerRef;
    //清除前面加载的组件
    viewContainRef.clear();
    this.currentComponent = viewContainRef.createComponent(componentFactory);
    if (this.currentComponent.instance.data && this.item.data) {
      this.currentComponent.instance.data = this.item.data;
    }

  }
  ngOnDestroy(): void {
    //console.log("shared dyanmic destory");
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
  }
}
