import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import {HomeComponent} from './home/home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';



const rootRouting: ModuleWithProviders  = RouterModule.forRoot([
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }


])


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    PostDetailComponent
    
  ],
  imports: [
    BrowserModule,
    rootRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    OrderModule,
    NgxPaginationModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
