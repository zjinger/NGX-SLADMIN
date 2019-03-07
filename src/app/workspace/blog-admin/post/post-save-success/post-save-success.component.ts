import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-post-save-success',
  templateUrl: './post-save-success.component.html',
  styleUrls: ['./post-save-success.component.less']
})
export class PostSaveSuccessComponent implements OnInit {
  id: string;
  title: string;
  constructor(public successBsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  hide() { }
}
