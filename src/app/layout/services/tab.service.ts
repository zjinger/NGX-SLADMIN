import { Injectable } from '@angular/core';
import { TabComponent } from '../models';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class TabService {
    // private tabList: Array<TabComponent> = [];
    private obTabListSource: Subject<Array<TabComponent>>;//open
    tabList$: Observable<Array<TabComponent>>;
    constructor() {
        this.obTabListSource = new Subject();
        this.tabList$ = this.obTabListSource.asObservable();
    }
    set(tabList: Array<TabComponent>) {
        this.obTabListSource.next(tabList)
    }
    ngOnDestroy(): void {
            
    }
}