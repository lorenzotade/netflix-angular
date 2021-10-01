import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from "../movie.service";
import {Movie} from "../Movie";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  movies: Movie[] = [];

  query: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  searchMovies(query: string) {
    if (query) {
      this.movieService.searchMovies(query.trim())
        .subscribe((data:any) => {
          this.movies = data.results;
          this.movieService.moviesEvent.emit(this.movies);
          this.query = '';
        });
    }
  }

}
