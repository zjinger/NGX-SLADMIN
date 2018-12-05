import { Component, OnInit } from '@angular/core';
import { Picture } from '../../models/Picture.model';
import { Label } from '../../models/Label.model';

@Component({
  selector: 'app-label-module',
  templateUrl: './label-module.component.html'
})
export class LabelModuleComponent implements OnInit {

  public labelList: Label[] = [];//最受欢迎的文章

  public pictureList: Picture[] = [];

  constructor() {
    this.labelList = [
      {
        pic: { path: 'posts/t2', format: 'jpg', },
        title: 'Android 使用技巧',
        url: '/blog/detail'
      },
      {
        pic: { path: 'posts/t3', format: 'jpg', },
        title: 'Android 使用技巧',
        url: '/blog/detail'
      },
      {
        pic: { path: 'posts/f2', format: 'jpg', },
        title: 'Android 使用技巧',
        url: '/blog/detail'
      }
    ];

    this.pictureList = [
      { path: 'posts/f2', format: 'jpg', url: '/blog/instagram' },
      { path: 'posts/m2', format: 'jpg', url: '/blog/instagram' },
      { path: 'posts/m3', format: 'jpg', url: '/blog/instagram' },
      { path: 'posts/t2', format: 'jpg', url: '/blog/instagram' },
      { path: 'posts/t3', format: 'jpg', url: '/blog/instagram' }
    ]
  }

  ngOnInit() {
  }

}


