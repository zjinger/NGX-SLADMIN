import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  
  //注入了 ViewContainerRef 来获取对容器视图的访问权，
  //这个容器就是那些动态加入的组件的宿主。
  constructor(public viewContainerRef: ViewContainerRef) { }

}
