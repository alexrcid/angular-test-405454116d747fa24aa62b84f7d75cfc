import { NgModule } from '@angular/core';

import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [ 
    PostsComponent,
    PostComponent
  ],
  imports: [],
  providers: [ PostsService ]
})
export class PostsModule {}
