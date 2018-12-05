import { Component, OnInit, SimpleChanges, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Base64 } from 'js-base64';
import { PostService } from '../../service/post.service';
import { Post } from '../../models/post.model';
@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.less']
})
export class PostInfoComponent implements OnInit {
  post: Post = new Post();
  url: string;
  constructor(
    private postService: PostService,
    private _activedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    let postId = this._activedRoute.snapshot.params['id'];
    this._activedRoute.url.subscribe(ele => {
      console.log(ele);
    });
    this.getInfo(postId);
  }
  getInfo(id) {
    // this.postService.find(id).subscribe(res => {
    //   if (res.rlt == 0) {
    //     this.post = res.datas;

    //     $("#introduction").html('');
    //     if (this.post.postContent != null && this.post.postContent != "") {
    //       this.post.postContent = Base64.decode(this.post.postContent);
    //       $("#introduction").html(this.post.postContent);
    //       console.log('info', this.post.postContent);
    //     }
    //   }
    // })
  }
}
