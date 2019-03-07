import { Component, OnInit } from '@angular/core';
import { GalleryModel } from 'src/app/shared/types/light-gallery.type';
@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.less']
})
export class InstagramComponent implements OnInit {
  public photoList: Array<GalleryModel> = [
    {
      thumb: 'instagram/thumb-1',
      src: 'instagram/1',
      subHtml: '<h4>Coniston Calmness</h4><p>Beautiful morning</p>'
    }, {
      thumb: 'instagram/thumb-2',
      src: 'instagram/2',
      subHtml: '<h4>Coniston Calmness</h4><p>Beautiful morning</p>'
    }, {
      thumb: 'instagram/thumb-3',
      src: 'instagram/3',
      subHtml: '<h4>Coniston Calmness</h4><p>Beautiful morning</p>'
    }, {
      thumb: 'instagram/thumb-4',
      src: 'instagram/4',
      subHtml: '<h4>Coniston Calmness</h4><p>Beautiful morning</p>'
    }, {
      thumb: 'instagram/thumb-5',
      src: 'instagram/5',
      subHtml: '<h4>Coniston Calmness</h4><p>Beautiful morning</p>'
    }, {
      thumb: 'instagram/thumb-6',
      src: 'instagram/6',
      subHtml: '<h4>Coniston Calmness</h4><p>Beautiful morning</p>'
    }
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.photoList);
  }
  init() {
    $('#aniimated-thumbnials').lightGallery({
      thumbnail: true
    })
  }
  init1() {
    $('#lightgallery').lightGallery({
      dynamic: true,
      thumbnail: true,
      animateThumb: true,
      showThumbByDefault: true,
      dynamicEl: [{
        "src": 'assets/img/instagram/1.jpg',
        'thumb': 'assets/img/instagram/thumb-1.jpg',
        'subHtml': '<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
      }, {
        'src': 'assets/img/instagram/2.jpg',
        'thumb': 'assets/img/instagram/thumb-2.jpg',
        'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
      }, {
        'src': 'assets/img/instagram/3.jpg',
        'thumb': 'assets/img/instagram/thumb-3.jpg',
        'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
      }]
    });
  }



}
