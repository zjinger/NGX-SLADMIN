import { Post } from 'src/app/shared/models/post.model';
import { PostService } from './../post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var editormd: any;
@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.less']
})
export class PostInfoComponent implements OnInit {
  id: string;
  public post: Post = new Post();
  constructor(
    private activeRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.activeRoute.params.subscribe(data => {
      this.id = data.id;
    })
  }

  ngOnInit() {
    this.getInfo(this.id);
  }

  getInfo(id) {
    this.postService.baseService.getInfo(id).subscribe(res => {
      // console.log(res);
      if (res.code == 0) {
        this.post = res.data;
        console.log(this.post)
        this.editorView();
      }
    })
  }
  public editormdView: any;
  editorView() {

  }

}
