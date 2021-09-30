import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../Movie";
import {Observable} from "rxjs";
import {query} from "@angular/animations";
;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() query!: string;

  trend_movies: Movie[] = [];
  searched_movies: Movie[] = [];

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

  searchMovie(query: string) {
    this.movieService.searchMovies(query)
      .subscribe((data:any) => {
        this.searched_movies = data.results;
      })
  }

}
