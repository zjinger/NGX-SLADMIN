import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from 'src/app/shared/services/base-service';

@Injectable()
export class PostService extends BaseService {
    constructor(http: Http) {
        super(http);
        this.baseUrl = "api/post"
    }
    getAllTask() {
        // this.http.get(`api/Tasks`).subscribe(res => {
        //     console.log(res)
        // })
    }
}