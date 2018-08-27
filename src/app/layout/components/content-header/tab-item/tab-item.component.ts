import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ContentChildren, QueryList } from '@angular/core';
import { TabLabelDirective } from '../../../directives';
import { PaneDirective } from '../../../../shared/directives';

@Component({
    selector: 'app-tab-item',
    templateUrl: './tab-item.component.html'
})
export class TabItemComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {
    }
    @Input() tabItem: any;
    @Input() isActive: boolean;
    @Input() currentIndex: number;
    
    @Output() onClickLabel: EventEmitter<any> = new EventEmitter<any>();
    
    clickLabel(index: number, disabled: boolean) {
        this.onClickLabel.emit({ index: index, disabled: disabled });
    }

    @ContentChildren(TabLabelDirective) tabListDirective: QueryList<TabLabelDirective>;

    ngAfterContentInit() {
        console.log(this.tabListDirective);
    }
}
