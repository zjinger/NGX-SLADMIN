import { Component, OnInit, OnDestroy } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import CKFinderUI from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.less']
})
export class CkeditorComponent implements OnInit, OnDestroy {
  public editorData = '<p>Hello, world!</p>';
  public Editor = ClassicEditor;
  public config = {
    language: 'zh-cn',
    // plugins: [CKFinder, CKFinderUI],
    ckfinder: {
      // Upload the images to the server using the CKFinder QuickUpload command.
      uploadUrl: '/api/upload',
      // Define the CKFinder configuration (if necessary).
      options: {
        resourceType: 'Images',
        language: 'zh-cn',
        openerMethod: 'modal'
      }
    },
    toolbar: ['ckfinder', 'imageUpload', '|', 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo']
  };
  constructor() {
    // console.log('CKFinder', CKFinder);
    console.log('ClassicEditor', ClassicEditor);
    // console.log('CKFinderUI', CKFinderUI);
    
  }

  ngOnInit() {
    console.log('ckeditor init')

  }

  onChange({ editor }: ChangeEvent) {
    console.log('change', editor)
  }

  ngOnDestroy(): void {
    console.log('ckeditor destory')
  }
  _onReuseInit() {
    console.log('ckeditor _onReuseInit')
  }

  _onReuseDestroy() {
    console.log('ckeditor _onReuseDestroy')
  }


}
