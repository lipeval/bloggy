import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsArray = []

  constructor() { }


  getPosts(){
    fetch('http://18.221.11.198:3000/posts/')
    .then(res => res.json())
    .then(json => this.postsArray.push(json))
  }
}
