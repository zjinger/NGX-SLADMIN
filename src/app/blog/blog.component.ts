import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
  <main>
  <blog-header></blog-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
</main>
  
  `
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
