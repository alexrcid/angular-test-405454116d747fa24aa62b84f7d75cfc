import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './modules/main/pages/main.component';
import { PostsComponent } from './modules/posts/pages/posts/posts.component';
import { PostComponent } from './modules/posts/components/post/post.component';
import { UsersComponent } from './modules/users/pages/users/users.component';
import { UserComponent } from './modules/users/components/user/user.component';
import { NewUserComponent } from './modules/users/pages/new-user/new-user.component';
import { NotFoundComponent} from './modules/not-found/not-found.component';


// Refactor-> Routes on selfModule
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: NewUserComponent }, 
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    PostsComponent,
    UserComponent,
    UsersComponent,
    NewUserComponent,
    NotFoundComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
