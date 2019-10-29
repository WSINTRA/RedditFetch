import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private _http: HttpClient) { }
  private query: string;
  private API_URL: string = environment.REDDIT_URL;

  getPosts(query){
  	// return this._http.get(this.API_URL + query).map(res=> res.json());
  	return fetch(this.API_URL + query + ".json");
  }
}
