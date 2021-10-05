import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {formatDate} from "@angular/common";
import {MovieService} from "../movie.service";
import {Movie} from "../Movie";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  filtered_by_date?: Movie[];
  filtered_by_genre?: Movie[];
  date_f: any = '';
  query: string = '';
  arr_genres_ids: number[] = [];

  constructor(public movieService: MovieService) {
    this.movieService.getGenres();
  }

  getDate(event: MatDatepickerInputEvent<any>) {
    let date: any = event.value;
    this.date_f = formatDate(date, 'YYYY-MM-dd', 'en-US');

  }

  getGenreId(event:any, id: number) {
    if (event.checked) {
      this.arr_genres_ids.push(id);
    }
    if (!event.checked) {
      this.arr_genres_ids.splice(this.arr_genres_ids.indexOf(id), 1);
    }
    console.log('id generi', this.arr_genres_ids);
  }

  filterMovies() {
    if (this.movieService.movies && this.date_f) {
      this.filtered_by_date = this.movieService.movies.filter(movie => movie.release_date >= this.date_f);
      console.log('film per data',this.filtered_by_date)
    }
    var arr:any = [];
/****************    if (this.arr_genres_ids.length) {
      this.arr_genres_ids.forEach(id => {
        this.filtered_by_date?.forEach(movie => {
          if (movie.genre_ids.includes(id)) {
            arr.push(movie)
            console.log('temp arr', arr);
          } // fine if movie.genre_ids includes id
          this.filtered_by_genre = arr;
        }) //fine foreach filtered_by_date
        //this.filtered_by_genre = this.filtered_by_date?.filter(movie => movie.genre_ids.includes(id));
        console.log('film per genere in foreach',this.filtered_by_genre)
        console.log('------------------------------------------------------');
      }) // fine foreach arr_genres_id
    } // fine if arr_genres.length *********************/

    if (this.arr_genres_ids.length) {
      this.arr_genres_ids.forEach(id => {
        arr = this.filtered_by_date?.filter(movie => movie.genre_ids.includes(id));
        this.filtered_by_genre = [...arr];
        console.log('film per genere in foreach',this.filtered_by_genre)
        console.log('------------------------------------------------------');
      })
    }

  } // fine funzione filterMovies

}
