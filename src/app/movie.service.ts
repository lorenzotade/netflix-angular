import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

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

}
