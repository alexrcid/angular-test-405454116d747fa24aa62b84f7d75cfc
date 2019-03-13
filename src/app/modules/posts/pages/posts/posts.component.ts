import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: {}[] = [];
  totalPosts = 0;

  constructor(private postService: PostsService) {  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data: {}[]) => {
      this.posts = data;
      this.totalPosts = this.posts.length;
    });
  }
}
