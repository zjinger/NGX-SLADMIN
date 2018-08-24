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
        console.log(this.tabHost2);
    }
    @Input() tabItem: any;
    @Input() isActive: boolean;
    @Input() currentIndex: number;
    @Output() onClickLabel: EventEmitter<any> = new EventEmitter<any>();
    clickLabel(index: number, disabled: boolean) {
        this.onClickLabel.emit({ index: index, disabled: disabled });
    }
    @ViewChild(TabLabelDirective) tabHost: TabLabelDirective;
    @ViewChild(PaneDirective) tabHost2: PaneDirective;
    @ContentChildren(TabLabelDirective) tabListDirective: QueryList<TabLabelDirective>;

    @ContentChildren(PaneDirective) topLevelPanes: QueryList<PaneDirective>;
    ngAfterContentInit() {
        console.log(this.topLevelPanes);
    }
}
