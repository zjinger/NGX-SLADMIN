import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class TabsetService {

  private tabUrl = 'api/tabs';

  constructor(private http: HttpClient) { }

  getTabs(): Observable<any> {
    return this.http.get(this.tabUrl)
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
