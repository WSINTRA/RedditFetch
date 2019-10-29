import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  posts:any[];
  postsFound: boolean = false;

  handleFetch(res){
    this.postsFound = true;
    this.posts = res.data.children;
    console.log(res.data.children);
  }

  handleError(error){
    console.log(error)
  }
  constructor(private _data:DataService ) { }

  searchPosts(query: string){
    return this._data.getPosts(query).then(res=> res.json()).then(
      response=> this.handleFetch(response)
      ).catch(error=> this.handleError(error)
      );
      
  }
  
  ngOnInit() {
   }

}
