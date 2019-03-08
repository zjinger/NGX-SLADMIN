import { ClassifyService } from './classify.service';
import { Component, OnInit } from '@angular/core';
import { Classify } from 'src/app/shared/models';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.less']
})
export class ClassifyComponent implements OnInit {
  public classify: Classify = new Classify(); // 当前操作的classify
  public classifyList: Array<Classify> = [];// 分类列表

  constructor(
    private service: ClassifyService
  ) { }

  ngOnInit() {
    this.getList();
  }

  /**
   * 删除操作
   * @param item
   */
  delete(item) {

  }

  /**
   * 修改操作
   * @param item
   */
  edit(item) {

  }

  getInfo(id) {
    this.service.baseService.getInfo(id).subscribe(res => {
      if (res.code == 0) {
        this.classify = res.data;
      }
    })
  }

  /**
   * 获取分类类表
   */
  getList() {
    this.service.baseService.getListWithPromise()
      .then((data) => {
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
  }

}
