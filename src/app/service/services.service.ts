import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TMDB } from '../config/tmdbconfig';
import { App } from '../config/appconfig';


@Injectable()
export class ServicesService {

  constructor(private http : Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});


  // Function to get search text and make service call to get movies fromTMDB
  searchMovie(searchedText) {
    return this.http.get(TMDB.search_api+searchedText)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

}
