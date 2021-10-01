import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter } from "@angular/core";
import {Movie} from "./Movie";
import {Credits} from "./Credits";
import {SingleMovie} from "./SingleMovie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesEvent : EventEmitter<Movie[]> = new EventEmitter();
  singleMovieEvent : EventEmitter<SingleMovie> = new EventEmitter();
  creditsEvent : EventEmitter<Credits> = new EventEmitter();

  constructor(private http: HttpClient) { }

  api_key: string = '5ec3e7079b3cb189d8fa0d92bd66a1c9';

  getTrendingMovies() {
    const trend_url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.api_key}`;
    return this.http.get(trend_url);
  }

  searchMovies(query: string) {
    let search_url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=en-US&page=1&query=${query}`
    return this.http.get(search_url);
  }

  getSingleMovie(id: number) {
    let movie_url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}&language=en-US`;
    return this.http.get(movie_url);
  }

  getCredits(id: number) {
    let credits_url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.api_key}&language=en-US`;
    return this.http.get(credits_url);
  }

}
