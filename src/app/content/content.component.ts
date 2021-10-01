import {Component, OnInit, OnDestroy } from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../Movie";
import {Credits} from "../Credits";
import {SingleMovie} from "../SingleMovie";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  movies!: Movie[];
  single_movie!: SingleMovie;
  trend_movies: Movie[] = [];
  credits!: Credits;

  constructor(private movieService: MovieService) {
    this.getMovies();
  }

  ngOnInit(): void {
    this.getTrendingMovies()
  }

  getTrendingMovies() {
    this.movieService.getTrendingMovies()
      .subscribe( (data:any) => {
        this.trend_movies = data.results;
      })
  }

  getMovies() {
    this.movieService.moviesEvent.subscribe((data:any) => {
      this.movies = data;
    })
  }

  getSingleMovie(id: number) {
    this.movieService.getSingleMovie(id)
      .subscribe((data:any) => {
        this.single_movie = data;
        this.movieService.singleMovieEvent.emit(this.single_movie);
      })
  }

  getCredits(id: number) {
    this.movieService.getCredits(id)
      .subscribe((data:any) => {
        this.credits = data;
        this.movieService.creditsEvent.emit(this.credits);
      });
  }

  ngOnDestroy() {

  }

}
