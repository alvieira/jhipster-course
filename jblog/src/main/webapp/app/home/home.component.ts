import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { Post } from 'app/shared/model/post.model';
import { PostService } from 'app/entities/post/post.service';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.postService.query().subscribe((res: HttpResponse<Post[]>) => (this.posts = res.body || []));
  }
}
