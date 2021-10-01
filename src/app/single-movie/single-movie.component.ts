import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {Credits} from "../Credits";
import {SingleMovie} from "../SingleMovie";

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {

  credits!: Credits;
  single_movie!: SingleMovie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getCredits();
    this.getMovieInfo()
  }

  getMovieInfo() {
    this.movieService.singleMovieEvent.subscribe((data:any) => {
      this.single_movie = data;
    })
  }

  getCredits() {
    this.movieService.creditsEvent.subscribe((data:any) => {
      this.credits = data;
    })
  }

}
