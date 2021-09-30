import { Component, OnInit, Input } from '@angular/core';
import {Movie} from "../Movie";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie!: Movie;

  overlay: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOverlay() {
    this.overlay = !this.overlay;
  }

}
