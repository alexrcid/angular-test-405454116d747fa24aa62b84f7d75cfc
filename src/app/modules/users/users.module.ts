import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

// Services
import { UsersService } from './services/users.service';

// Components
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: NewUserComponent }
];

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [UsersService]
})
export class UsersModule {}