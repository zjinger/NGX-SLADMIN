import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
declare var editormd: any;
@Component({
  selector: 'app-editor-preview-html',
  templateUrl: './editor-preview-html.component.html',
  styleUrls: ['./editor-preview-html.component.less']
})
export class EditorPreviewHtmlComponent implements OnInit {
  @Input() postContent: string;
  constructor() { }
  editor: any;
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.editor = editormd.markdownToHTML('editormd-view', {
      markdown: this.postContent,
      htmlDecode: "style,script,iframe",  // you can filter tags decode
      emoji: true,
      taskList: true,
      tex: true,  // 默认不解析
      flowChart: true,  // 默认不解析
      sequenceDiagram: true  // 默认不解析
    });
  }

}
