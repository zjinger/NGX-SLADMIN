import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base-service';
import { Result } from 'src/app/shared/models/result.model';

@Injectable()
export class PostService {
  protected baseUrl: string = '/api/post';
  public baseService: BaseService;
  constructor(baseService: BaseService) {
    this.baseService = baseService;
    this.baseService.set('PostService', this.baseUrl);
  }
}
