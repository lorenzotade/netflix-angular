import { Component, OnInit, Output } from '@angular/core';
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() query!: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
