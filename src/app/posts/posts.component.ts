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
  comments:any[];
  commentsFound: boolean = false;
  postsFound: boolean = false;

  handleFetch(res){
    this.postsFound = true;
    this.posts = res.data.children;
    console.log(res.data.children);
  }
  listComments(res){
    this.commentsFound = true;
    this.comments = res[1].data.children;
    console.log(this.comments)
  }
  handleError(error){
    console.log(error)
  }

  constructor(private _data:DataService ) { }
  
  showComments(commentLink: string){
   return this._data.getComments(commentLink).then(res=> res.json()).then(
      response=> this.listComments(response)
      ).catch(error=> this.handleError(error)
      );
  }
  searchPosts(query: string){
    return this._data.getPosts(query).then(res=> res.json()).then(
      response=> this.handleFetch(response)
      ).catch(error=> this.handleError(error)
      );
      
  }
  
  ngOnInit() {
   }

}
