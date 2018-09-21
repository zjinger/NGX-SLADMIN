import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2, AfterContentInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.less']
})
export class ViewChildComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('child', { read: ElementRef }) child: ElementRef;
  @ViewChild('tpl', { read: TemplateRef }) tpl: TemplateRef<any>;
  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
    // //console.log(this.child);
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // //console.log(this.child);
    let embeddedView = this.tpl.createEmbeddedView(this.child);
    let commentElement = this.tpl.elementRef.nativeElement;
    // //console.log(embeddedView.context);
   

  }
  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    //console.log(this.child);
  }
}
