import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class LeafService {
  private markUrl = './assets/marklist-mock.json';
  //消息主题
  private outputTitle: Subject<any> = new Subject();
  outputTitle$: Observable<any>;
  constructor(
    private http: HttpClient
  ) {
    this.outputTitle$ = this.outputTitle.asObservable();
  }
  selectMarker(id: string) {
    this.outputTitle.next(id);
  }

  getAllMarkLights(): Observable<any> {
    return this.http.get(this.markUrl)
  }
}
