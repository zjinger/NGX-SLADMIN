import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-post-confirm',
  templateUrl: './post-confirm.component.html',
  styleUrls: ['./post-confirm.component.less']
})
export class PostConfirmComponent implements OnInit {
  @Output() onPublish: EventEmitter<any> = new EventEmitter<any>();
  @Output() onHide: EventEmitter<any> = new EventEmitter<any>();
  canAddTag = true;
  // 标签
  tags: Array<any> = [];

  // 选中的分类
  selectedClassifys: Array<any> = [];

  // 已经存在的分类
  // TODO 后台查询
  classifys: Array<any> = [
    { checked: false, value: "strtuts2", id: 1 },
    { checked: false, value: "JavaSE", id: 2 },
    { checked: false, value: "Angular", id: 3 },
    { checked: false, value: "CSS3", id: 4 },
  ];

  post: Post = new Post();
  constructor() { }

  ngOnInit() {
  }
  hide() {
    this.onHide.emit();
  }
  publish(status) {
    let tags = this.tags.filter(ele => ele.active && ele.value != '');
    this.onPublish.emit({ status, tags, isOrigin: this.post.isOriginal, classify: this.selectedClassifys })
  }
  addTags() {
    let isEmpty = this.tags.some(ele => ele.value == '' && ele.active);
    if (!isEmpty) { this.tags.push({ active: true, value: '' }) };
    if (this.tags.filter(ele => ele.active).length == 5) {
      this.canAddTag = false;
    }
  }
  removeTag(idx) {
    this.tags[idx].active = false;
    if (this.tags.filter(ele => ele.active).length < 5) {
      this.canAddTag = true;
    }
  }
  getTagValue(event, idx) {
    this.tags[idx].value = event.target.innerText;
  }

  getClassifyValue(event, item) {
    // item.value = event.target.innerText;
    item.value = event.target.innerText;
    console.log(item);
  }
  classifyChange(item) {
    item.checked = !item.checked;
    let isChecked = item.checked;
    let idx = this.selectedClassifys.findIndex(ele => ele.value == item.value);
    if (idx == -1) {
      this.selectedClassifys.push(item);
    } else {
      this.selectedClassifys[idx].checked = isChecked;
    }
    console.log(this.selectedClassifys)
  }
  addClassify() {
    let isEmpty = this.selectedClassifys.some(ele => ele.value == '' && ele.checked);
    if (!isEmpty) {
      this.selectedClassifys.push({ checked: true, value: '', id: 0 });
    }
  }
  removeClassify(item) {
    item.checked = false;
    this.classifys.forEach(element => {
      if (element.value == item.value) element.checked = false;
    });
    this.selectedClassifys.filter(ele => ele.value == '' && (!ele.checked));
  }
}
