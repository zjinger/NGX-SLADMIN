import { PostService } from './../post.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { EditorConfig } from '../editor/model/editor-config';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Post } from 'src/app/shared/models/post.model';
import { Result } from 'src/app/shared/models/result.model';
import { PostSaveSuccessComponent } from '../post-save-success/post-save-success.component';
import { GlobalState } from 'src/app/global.state';
@Component({
  selector: 'app-post-handle',
  templateUrl: './post-handle.component.html',
  styleUrls: ['./post-handle.component.less']
})
export class PostHandleComponent implements OnInit {
  successBsModalRef: BsModalRef;// 保存成功确认框
  confirmBsModalRef: BsModalRef; // 确认模态框
  public post = new Post();
  conf = new EditorConfig();

  z_index = 9999;
  constructor(
    private modalService: BsModalService,
    private service: PostService,
    private _state: GlobalState
  ) {
    this.conf.onfullscreen = () => {
      this.z_index = 9999;
    }
    this.conf.onfullscreenExit = () => {
      this.z_index = 0;
    }

  }
  ngOnInit() {
    this.post.modifyBy = 'zj';
    this.post.userId = '1233';
    this.post.classifyId = '1';
    this.post.userName = 'zhangjing';
    this._state.notifyDataChanged('MDEditor', true);
  }
  // 同步属性内容
  syncModel(str): void {
    this.post.postContent = str;
  }

  toPublish(template) {
    this.openConfirmModal(template);
  }
  /**
   * 打开模态框
   * @param template
   */
  openConfirmModal(template: TemplateRef<any>) {
    this.confirmBsModalRef = this.modalService.show(template, {
      backdrop: 'static',
      ignoreBackdropClick: true,
      keyboard: true,
      show: true
    });
  }

  publish(event) {
    this.post.isOriginal = event.isOrigin;
    this.post.status = event.status;
    this.post.tags = event.tags.map(ele => ele.value);
    console.log(this.post);
    this.service.baseService.save(this.post).subscribe((res: Result) => {
      console.log(res);
      if (res.code == 0) {
        console.log(res.data);//主键
        this.confirmBsModalRef.hide();
        this.success(res.data, this.post.title);
      }
    })
  }

  success(id, title) {
    this.successBsModalRef = this.modalService.show(PostSaveSuccessComponent, {
      backdrop: 'static',
      ignoreBackdropClick: true,
      keyboard: true,
      show: true
    })
    this.successBsModalRef.content.title = title;
    this.successBsModalRef.content.id = id;
  }
}
