import { AfterViewInit, Attribute, Directive, EventEmitter, Input, Output } from '@angular/core';
import { EditorConfig } from './model/editor-config';

declare var editormd: any;
declare var $: any;

@Directive({
  selector: '[appEditorMd]'
})
export class EditorMdDirective implements AfterViewInit {
  @Input() editormdConfig: EditorConfig; // 配置选项
  @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>(); // 发射器
  editor: any; // editormd编辑器

  constructor(@Attribute('id') private id: string) {
  }

  ngAfterViewInit(): void {
    // editormd.emoji = {
    //   path: "http://www.emoji-cheat-sheet.com/graphics/emojis/",
    //   ext: ".png"
    // };

    editormd.emoji = {
      path: "https://www.webfx.com/tools/emoji-cheat-sheet/",
      ext: ".png"
    };

    // Twitter Emoji (Twemoji)  graphics files url path
    // editormd.twemoji = {
    //   path: "http://twemoji.maxcdn.com/72x72/",
    //   ext: ".png"
    // };
    this.editor = editormd(this.id, this.editormdConfig); // 创建编辑器

    const out = this.onEditorChange;
    const textarea = $('#' + this.id + ' :first'); // 获取textarea元素

    // 当编辑器内容改变时，触发textarea的change事件
    this.editor.on('change', function () {
      console.log();
      out.emit(textarea.val());
    });
    console.log(this.editor)
  }
}
