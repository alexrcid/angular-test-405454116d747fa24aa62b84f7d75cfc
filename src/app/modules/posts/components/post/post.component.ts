import { Component, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'], 
  providers: [ PostsService ]
})
export class PostComponent {
  @Input() post:{};
}
