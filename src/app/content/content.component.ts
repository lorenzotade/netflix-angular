import {Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTrendingMovies()
  }

}
