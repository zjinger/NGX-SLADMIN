import { BaseService } from 'src/app/shared/services/base-service';
import { Injectable } from '@angular/core';

@Injectable()
export class ClassifyService {
  protected baseUrl = 'api/classify'
  constructor(public baseService: BaseService) {
    this.baseService.set('ClassifyService', this.baseUrl);
  }
}
