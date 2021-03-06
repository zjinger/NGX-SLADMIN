import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { PostSearch } from 'src/app/shared/models/search/post-search.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  public postList: Array<Post> = new Array<Post>()

  public search: PostSearch = new PostSearch()

  constructor(
    private service: PostService
  ) { }

  ngOnInit() {
    this.getList()
  }

  getList() {
    this.service.baseService.getListWithPromise()
      .then(data => {
        console.log(data)
        this.postList = data;
      }).catch(err => {
        console.log(err)
      });
  }

  delete(item) {

  }
}
