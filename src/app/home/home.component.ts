import { Component, OnInit } from '@angular/core';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  posts: Post[] = [];

  isLoading : Boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    });

    this.isLoading = false;
  }

}
