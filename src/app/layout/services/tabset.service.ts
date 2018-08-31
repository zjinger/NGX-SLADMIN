import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TabComponent } from '../models/tab-component';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class TabsetService {
  private tabUrl = 'api/tabs';
  
  private onClickTabSource = new Subject<TabComponent>();
  clickTab$: Observable<TabComponent>;
  constructor(private http: HttpClient) {
    this.clickTab$ = this.onClickTabSource.asObservable();
  }

  getTabs(): Observable<TabComponent[]> {
    return this.http.get<TabComponent[]>(this.tabUrl)
  }

  /**
   * 添加、删除、刷新tab
   * @param value 
   */
  curdTab(value?: TabComponent) {
    this.onClickTabSource.next(value)
  }

}
