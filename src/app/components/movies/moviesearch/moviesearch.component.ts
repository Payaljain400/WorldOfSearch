import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../../service/services.service'
@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.css'],
    providers:[ServicesService]
})
export class MoviesearchComponent implements OnInit {
	public searchedText: string='';
  public moviesList=[];
  constructor(private movieService :ServicesService ) { }

  ngOnInit() {
  }

searchMovie(){
  this.movieService.searchMovie(this.searchedText).subscribe((res) =>{
  	this.moviesList = res.results;
  	this.success.emit({
      'moviesList': this.moviesList
    });
  	}, (error) =>{

  	})
}
}
