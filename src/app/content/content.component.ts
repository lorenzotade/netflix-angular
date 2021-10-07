import {Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getTrendingMovies()
  }

  getTrendingPaginatorData(event: PageEvent) {
    this.movieService.getTrendingMovies(event.pageIndex + 1)
  }

  getMoviesPaginatorData(event: PageEvent) {
    this.movieService.getMovies(this.movieService.query, event.pageIndex + 1)
  }

}
