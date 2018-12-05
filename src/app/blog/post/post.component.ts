import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { PostSearch } from '../models/search';
import { Post } from '../models/post.model';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html', 
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  public postList: Post[] = [];
  postSearch: PostSearch = new PostSearch();
  constructor(private postService: PostService) {

  }

  ngOnInit() {
    // this.postService.getAllTask()
    this.postList = [
      {
        id: '123',
        postTitle: 'test',
        userName: 'ZhangJing'
      }
    ]
    // this.postService.getList(this.postSearch).subscribe(res => {
    //   if (res && res.rlt == 0) {
    //     this.postList = res.datas;
    //     console.log("获取文章列表", this.postList);
    //   }
    // })
  }

}
