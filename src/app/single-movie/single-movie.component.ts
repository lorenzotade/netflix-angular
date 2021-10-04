import { Component } from '@angular/core';
import {MovieService} from "../movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent {

  constructor(
    public movieService: MovieService,
    private route: ActivatedRoute
  ) {
    const ID: any = this.route.snapshot.paramMap.get('id')
    if (!movieService.single_movie) {
      this.movieService.getSingleMovie(ID);
      this.movieService.getCredits(ID)
    }
  }

}
