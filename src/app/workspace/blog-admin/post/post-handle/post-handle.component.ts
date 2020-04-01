import { ActivatedRoute } from '@angular/router';
import { PostService } from './../post.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { EditorConfig } from '../editor/model/editor-config';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Post } from 'src/app/shared/models/post.model';
import { Result } from 'src/app/shared/models/result.model';
import { PostSaveSuccessComponent } from '../post-save-success/post-save-success.component';
@Component({
  selector: 'app-post-handle',
  templateUrl: './post-handle.component.html',
  styleUrls: ['./post-handle.component.less']
})
export class PostHandleComponent implements OnInit {
  successBsModalRef: BsModalRef;// 保存成功确认框
  confirmBsModalRef: BsModalRef; // 确认模态框
  public post = new Post(); // 当前文章
  public id: string;//编辑时需要传入id
  conf = new EditorConfig();
  z_index = 0;
  constructor(
    private modalService: BsModalService,
    private service: PostService,
    private activeRoute: ActivatedRoute
  ) {
    this.conf.onfullscreen = () => {
      this.z_index = 9999;
    }
    this.conf.onfullscreenExit = () => {
      this.z_index = 0;
    }
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;
    })
  }
  ngOnInit() {
    this.post.modifyBy = 'zj';
    this.post.userId = '1233';
    this.post.classifyId = '1';
    this.post.userName = 'zhangjing';
    if (this.id) {// 若果id 有值，代表当前是编辑页面
      this.getInfo(this.id);
    }
  }

  // 同步属性内容
  syncModel(str): void {
    this.post.postContent = str;
  }

  /**
   * 发布文章，弹出确认模态框
   * @param template
   */
  toPublish(template: TemplateRef<any>) {
    this.confirmBsModalRef = this.modalService.show(template, {
      backdrop: 'static',
      ignoreBackdropClick: true,
      keyboard: true,
      show: true
    });
  }

  /**
   * 模态框确认发布文章操作
   * @param event
   */
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

  // 保存成功后弹窗
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

  getInfo(id) {
    this.service.baseService.getInfo(id).subscribe((res: Result) => {
      if (res.code == 0) {
        this.post = res.data;
      }
    })
  }
}
