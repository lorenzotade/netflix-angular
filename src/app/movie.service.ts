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

  query: string = '';
  trend_movies?: Movie[];
  movies?: Movie[];
  single_movie?: SingleMovie;
  credits?: Credits;
  genres?: SingleGenre[];
  api_key: string = '5ec3e7079b3cb189d8fa0d92bd66a1c9';
  totPages: number = 1;

  constructor( private http: HttpClient ) { }

  getTrendingMovies(page: number = 1) {
    const trend_url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.api_key}&page=${page}`;
    this.http.get<any>(trend_url)
      .subscribe( (data:any) => {
        this.trend_movies = data.results;
        this.totPages = data.total_pages;
      });
  }

  getMovies(query: string, page: number = 1, callback:any = () => {}) {
    let search_url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=en-US&page=${page}&query=${query}`
    if (query.trim()) {
      this.http.get<any>(search_url)
        .subscribe((data:any) => {
          this.movies = data.results;
          this.totPages = data.total_pages;
          callback();
        });
    }
  }

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
