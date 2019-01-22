import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService extends BaseService {
    
    protected baseUrl: string = '/api/post';

    constructor(protected http: HttpClient) {
        super(http)
    }
}