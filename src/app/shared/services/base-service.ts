import { Http } from '@angular/http';
import { Observable } from 'rxjs';

export class BaseService {
    protected baseUrl: string;
    constructor(
        protected http: Http
    ) { }

    public getList(datas: any) {
        this.http.post(`${this.baseUrl}/getList`, datas).subscribe(res => {
            console.log(res)
        })
    }
    // public save(datas: any): Observable<Result> {
    //     return this.http.post(`${this.baseUrl}/save`, datas).map(res => res.json())
    // }
    // delete(id: string): Observable<Result> {
    //     return this.http.get(`${this.baseUrl}/delete/${id}`).map(res => res.json())
    // }
    // find(id: string): Observable<Result> {
    //     return this.http.get(`${this.baseUrl}/getInfo/${id}`).map(res => res.json())
    // }

}
