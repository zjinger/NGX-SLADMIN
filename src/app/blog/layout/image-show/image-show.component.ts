import { Component, OnInit } from '@angular/core';
import { Picture } from '../../models/Picture.model';

@Component({
  selector: 'blog-image-show',
  templateUrl: './image-show.component.html'
})
export class ImageShowComponent implements OnInit {
  public imageTabList: ImageTab[] = [];
  constructor(
  ) {
    this.imageTabList = [
      {
        hrefUrl: 'expeditions',
        id: 'expeditions-tab',
        title: 'MOVIE',
        selected: true,
        picList: [
          {
            path: "movie/f1",
            name: "f1",
            format: "jpg",
          },
          {
            path: "movie/f2",
            name: "f2",
            format: "jpg",
          },
          {
            path: "movie/f3",
            name: "f3",
            format: "jpg",
          }
        ]
      },
      {
        hrefUrl: 'safari',
        id: 'safari-tab',
        title: 'TRAVEL',
        selected: false,
        picList: [
          {
            path: "travel/t1",
            name: "t1",
            format: "jpg",
          },
          {
            path: "travel/t2",
            name: "t2",
            format: "jpg",
          },
          {
            path: "travel/t3",
            name: "t3",
            format: "jpg",
          }
        ]
      },
      {
        hrefUrl: 'trekking',
        id: 'trekking-tab',
        title: 'MUSIC',
        selected: false,
        picList: [
          {
            path: "music/m1",
            name: "m1",
            format: "jpg",
          },
          {
            path: "music/m2",
            name: "m2",
            format: "jpg",
          },
          {
            path: "music/m3",
            name: "m3",
            format: "jpg",
          }
        ]
      }
    ];
  }

  ngOnInit() {
  }
  onSelect($event: ImageTab) {
    console.log($event);
    $event.selected = true;
    this.imageTabList.forEach(ele => {
      if (ele.title != $event.title) {
        ele.selected = false;
      }
    })
  }
}

export class ImageTab {
  hrefUrl?: string;
  id?: string;
  title?: string;
  picList?: Picture[];
  expanded?: boolean;
  selected?: boolean;
}
