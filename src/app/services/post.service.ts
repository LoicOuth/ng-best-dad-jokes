import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpclient: HttpClient) { }
  

  public getPosts() : Observable<Post[]>
  {
    return this.httpclient.get<Post[]>('http://localhost:3001/posts');
  }
}
