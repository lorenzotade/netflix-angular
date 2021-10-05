import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Movie} from "./Movie";
import {Credits} from "./Credits";
import {SingleMovie} from "./SingleMovie";
import {SingleGenre} from "./Genre";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  trend_movies?: Movie[];
  movies?: Movie[];
  single_movie?: SingleMovie;
  credits?: Credits;
  genres?: SingleGenre[];
  //top_rated?: Movie[];
  api_key: string = '5ec3e7079b3cb189d8fa0d92bd66a1c9';

  constructor( private http: HttpClient ) { }

  getTrendingMovies() {
    const trend_url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.api_key}`;
    this.http.get<any>(trend_url)
      .subscribe( (data:any) => {
        this.trend_movies = data.results;
      });
  }

  getMovies(query: string) {
    let search_url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=en-US&page=1&query=${query}`
    if (query.trim()) {
      this.http.get<any>(search_url)
        .subscribe((data:any) => {
          this.movies = data.results;
          console.log('tutti film da query',this.movies)
          //this.router.navigate(['home']);
        });
    }
  }

  /*getTopRated() {
    let top_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.api_key}&language=en-US&page=1`;
    this.http.get<any>(top_url)
      .subscribe((data:any) => {
        this.top_rated = data.results;
      });
  }*/

  getSingleMovie(id: number) {
    let movie_url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}&language=en-US`;
    this.http.get<SingleMovie>(movie_url)
      .subscribe((data:SingleMovie) => {
        this.single_movie = data;
      });
  }

  getCredits(id: number) {
    let credits_url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.api_key}&language=en-US`;
    this.http.get<Credits>(credits_url)
      .subscribe((data:Credits) => {
        this.credits = data;
      });
  }

  getGenres() {
    let genres_url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}&language=en-US`;
    this.http.get<any>(genres_url)
      .subscribe((data:any) => {
        this.genres = data.genres;
      })
  }

}
