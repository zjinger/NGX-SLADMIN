import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Result } from 'src/app/blog/models/result.model';

export abstract class BaseService {
    protected abstract baseUrl: string;
    constructor(
        protected http: HttpClient
    ) { }

    public getListWithOutDatas() {
        return new Promise((resolve, reject) => {
            this.http.get<Result>(`${this.baseUrl}/getList`).subscribe(res => {
                if (res.code == 0) {
                    resolve(res.data)
                } else {
                    reject(res)
                }
            }, err => {
                console.log('系统异常!')
                reject(err)
            })
        })
    }

    public getList(datas: any) {

        return new Promise((resolve, reject) => {
            this.http.post<Result>(`${this.baseUrl}/getList`, datas).subscribe(res => {
                if (res.code == 0) {
                    resolve(res.data)
                } else {
                    reject(res)
                }
            }, err => {
                console.log('系统异常!')
                reject(err)
            })
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
