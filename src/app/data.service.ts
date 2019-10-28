import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPosts(){
  	return fetch("https://www.reddit.com/r/reefer.json");
  }
}
