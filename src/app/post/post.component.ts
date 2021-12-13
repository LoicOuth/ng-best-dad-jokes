import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = []
  post?: Post;
  slug!: String;

  isLoading: Boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    });

    this.route.params.subscribe(param => { 

      this.post = this.posts.find(post => post.slug == param['slug']);

      this.slug = param['slug'];
    }) ;

    this.isLoading = false;
  }
}
