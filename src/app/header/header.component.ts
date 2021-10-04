import {Component} from '@angular/core';
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  query: string = '';

  constructor( public movieService: MovieService ) { }

}
