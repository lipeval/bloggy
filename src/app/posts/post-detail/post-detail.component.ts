import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  detailArray = []
  id;
  commentsArray = []
  newArray = []
  array = []
  err = new Error;
  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
  }

  ngOnInit() {
    this.getId(this.id, this.err)
    this.getComments()
    this.getTal()
    this.getPosts()
    
    
  }

  getPosts(){
    this.http.get('http://18.221.11.198:3000/posts')
    .toPromise()
    .then(res => {
      this.array.push(res)
    })
    const keys = Array.isArray(this.array)
    console.log(keys)

  }


  getId(id, err){
    this.http.get('http://18.221.11.198:3000/posts', {
      params: {
        id: id
      }
    }).toPromise()
    .then(id => {
      this.detailArray.push(id)
    })
    .catch(err)
  }

  getComments(){
    this.http.get('http://18.221.11.198:3000/comments')
    .toPromise()
    .then(comm => {  
      let arr = []
      arr.push(comm)
      arr.forEach((data) => {
        
      })
    })

  }

  getTal(){
    this.detailArray.forEach((i => {
      this.newArray = i.map(j => {
        return {'author': j, 'matched': this.array.includes[j]}
      })
      console.log(this.newArray)
    }))


  }

}
