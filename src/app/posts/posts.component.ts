import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderPipe } from 'ngx-order-pipe';
import {Router} from '@angular/router'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

// import "rxjs/add/observable/map"; 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // pagination and ordering controls
  sortedCollection: any[];
  order: string = 'author';
  reverse: boolean = false;
  p: number = 1
  


  filterId = []
  posts: any;
  postsArray = []  
  userFilter: any = {author: ''}
  idArray = []


  constructor(private http: HttpClient, private orderPipe: OrderPipe, private router: Router) {
    this.sortedCollection = orderPipe.transform(this.postsArray, 'author');
  }


  ngOnInit() {
    this.getPosts()
    
  }

 


  getPosts(){
    this.http.get('http://18.221.11.198:3000/posts')
    .toPromise()
    .then(res => {
      this.postsArray.push(res)
      console.log(this.postsArray)
    })
  }

 
  getId(id,err){
    this.http.get('http://18.221.11.198:3000/posts', {
      params: {
        id: id
      }
    }).toPromise()
    .then(res => {
      if(res){
        this.router.navigate(['/posts/' + id])
      }
    })
    .catch(err)
  }




  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
