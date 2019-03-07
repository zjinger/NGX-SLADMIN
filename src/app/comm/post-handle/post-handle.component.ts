import { Component, OnInit } from '@angular/core';
import { EditorConfig } from './editor/model/editor-config';

@Component({
  selector: 'app-post-handle',
  templateUrl: './post-handle.component.html',
  styleUrls: ['./post-handle.component.less']
})
export class PostHandleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  conf = new EditorConfig();
  markdown = '测试语句';

  // 同步属性内容
  syncModel(str): void {
    this.markdown = str;
  }

}
