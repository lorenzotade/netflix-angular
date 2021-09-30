import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../Movie";
import {Observable} from "rxjs";
;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  trend_movies: Movie[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getTrendingMovies()
  }

  getTrendingMovies() {
    this.movieService.getTrendingMovies()
      .subscribe( (data:any) => {
        this.trend_movies = data.results;
      })
  }

}
