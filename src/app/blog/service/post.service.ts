import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service';

@Injectable()
export class PostService extends BaseService {
    protected baseUrl = "api/post"
    constructor(http: HttpClient) {
        super(http);
    }
    getAllTask() {
        // this.http.get(`api/Tasks`).subscribe(res => {
        //     console.log(res)
        // })
    }
}