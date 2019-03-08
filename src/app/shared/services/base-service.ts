import { Injectable, Input } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { Result } from 'src/app/blog/models/result.model';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
@Injectable()
export class BaseService {
  protected baseUrl: string;
  private handleError: HandleError;
  private serviceName: string = '';
  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) {

  }
  @Input()
  set(serviceName: string, baseUrl: string) {
    this.serviceName = serviceName;
    this.baseUrl = baseUrl;
    this.handleError = this.httpErrorHandler.createHandleError(this.serviceName);
  }

  /**
   * get请求
   * @params url
   * @params operation 操作名称标识
   */
  get<T>(url, operation?: string): Observable<T> {
    return this.http.get<T>(url)
      .pipe(
        catchError(this.handleError(operation, { code: 2 } as any))
      );
  }

  /**
   * post 请求
   * @param url 请求url
   * @param data 请求发出的参数
   * @param operation 操作名称标识
   */
  post<T>(url, data, operation?: string): Observable<T> {
    return this.http.post<T>(url, data)
      .pipe(
        catchError(this.handleError(operation, {} as T))
      )
  }

  /**
   * 查询列表
   * @param url
   * @param data
   * @param operation
   */
  getList(data): Observable<Result> {
    return this.post<Result>(`${this.baseUrl}/getList`, data, `${this.serviceName}/getList`);
  }

  /**
   * 查询列表，无参数传入
   * @param url
   */
  getListWithoutParams(): Observable<Result> {
    return this.get<Result>(`${this.baseUrl}/getList`, `${this.serviceName}/getList`);
  }

  /**
   * 保存操作
   * @param url
   * @param data
   */
  save(data): Observable<Result> {
    return this.post<Result>(`${this.baseUrl}/save`, data, `${this.serviceName}/save`);
  }

  /**
   * 根据id获取详情
   * @param url
   * @param id
   */
  getInfo(id): Observable<Result> {
    return this.get<Result>(`${this.baseUrl}/getInfo/${id}`, `${this.serviceName}/getInfo`);
  }

  /**
   * 根据id 删除数据
   * @param url
   * @param id
   */
  delete(id): Observable<Result> {
    return this.get<Result>(`${this.baseUrl}/delete${id}`, `${this.serviceName}/delete`);
  }


  /**
   * 根据查询参数获取列表数据
   * @param datas
   */
  getListWithPromise(data?): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (data) {
        this.post<Result>(`${this.baseUrl}/getList`, `${this.serviceName}/getListWithPromise`).subscribe(
          this.respond(resolve, reject), this.respondError(reject)
        )
      } else {
        this.get<Result>(`${this.baseUrl}/getList`, `${this.serviceName}/getListWithPromise`).subscribe(
          this.respond(resolve, reject), this.respondError(reject)
        )
      }
    })
  }

  /**
   *成功响应
   *
   * @private
   * @memberof BaseService
   */
  private respond = (resolve, reject): (res: Result) => void => {
    return (res: Result) => {
      if (res.code == 0) {
        resolve(res.data as any[])
      } else {
        reject(res)
      }
    }
  }

  /**
   *错误处理
   *
   * @private
   * @memberof BaseService
   */
  private respondError = (reject): (error) => void => {
    return (error) => { reject(error) }
  }
}
