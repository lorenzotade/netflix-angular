import { Component, Input } from '@angular/core';
import {Movie} from "../Movie";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() movie!: Movie;

  overlay: boolean = false;

  constructor() { }

  toggleOverlay() {
    this.overlay = !this.overlay;
  }

}
