import {Component} from '@angular/core';
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor( public movieService: MovieService ) { }

}
