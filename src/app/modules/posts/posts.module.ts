import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

// Services
import { PostsService } from './services/posts.service';

// Components
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  declarations: [
    PostsComponent, 
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [PostsService]
})
export class PostsModule {}