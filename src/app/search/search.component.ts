import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DatePipe, formatDate} from "@angular/common";
import {MovieService} from "../movie.service";
import {Movie} from "../Movie";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  filtered_by_date: Movie[] = [];
  filtered_by_genre: any = [];
  query: string = '';
  date_f: any = '';
  arr_genres_ids: number[] = [];
  searched: boolean = false;
  msg: string = '';

  constructor(public movieService: MovieService, private datePipe: DatePipe) {
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
  }

  filterMovies() {
    this.msg = '';
    this.searched = false; // SET FLAG FALSE
    if (this.movieService.movies && this.date_f) {
      this.filtered_by_date = this.movieService.movies.filter(movie => movie.release_date >= this.date_f);
      let date_d = this.datePipe.transform(this.date_f, 'dd MMM YYYY');
      if (this.filtered_by_date.length) {
        this.msg = `Movies from ${date_d}`;
      } else {
        this.msg = `No movies found from ${date_d} with this query: "${this.query}", but here are the movies with that query from all time:`;
      }
    } else if (!this.movieService.movies) {
      this.msg = `No movies found with this query: ${this.query}`
    }
    var globalArr:any = [];
    var globalMovieIndex = 0;

    if (this.arr_genres_ids.length) {
      this.filtered_by_date.forEach((movie, index) => {
        globalMovieIndex = index;
        let check_arr: boolean[] = [];
        this.arr_genres_ids.forEach(id => {
          if (this.filtered_by_date[globalMovieIndex].genre_ids.includes(id)) {
            check_arr.push(true);
          } else {
            check_arr.push(false)
          }
        }); //fine foreach ids
        if (!check_arr.includes(false)) {
          globalArr.push(this.filtered_by_date[globalMovieIndex]);
        }
        this.searched = true; // FLAG CHECK
        check_arr = [];
      }); //fine foreach movies
      if (globalArr.length) {
        this.filtered_by_genre = globalArr;
        this.msg = `Movies having the selected genres:`
        globalArr = [];
      } else {
        this.filtered_by_genre = [];
      }
      console.log('filtered by genre', this.filtered_by_genre);
    } //fine if array_genres_ids.length
    else {
      this.filtered_by_genre = [];
    }
  } // fine funzione filterMovies

  getMoviesPaginatorData(event?: PageEvent) {
    this.movieService.getMovies(this.query, event ? event!.pageIndex + 1 : 1, this.filterMovies())
    console.log(this.movieService.movies)
  }
  getDatePaginatorData(event: PageEvent) {
    this.movieService.getMovies(this.query, event.pageIndex + 1, this.filterMovies())
    console.log(this.filtered_by_date);
  }
  getGenresPaginatorData(event: PageEvent) {
    this.movieService.getMovies(this.query, event.pageIndex + 1, this.filterMovies())
    console.log(this.filtered_by_genre);
  }


}

// FUNZIONA CUMULATIVO SE IL FILM HA ALMENO UN ID
/****************
 *  if (this.arr_genres_ids.length) {
      this.arr_genres_ids.forEach(id => {
        this.filtered_by_date?.forEach(movie => {
          if (movie.genre_ids.includes(id)) {
            globalArr.push(movie)
            console.log('temp arr', arr);
          } // fine if movie.genre_ids includes id
          this.filtered_by_genre = globalArr;
        }) //fine foreach filtered_by_date
        //this.filtered_by_genre = this.filtered_by_date?.filter(movie => movie.genre_ids.includes(id));
        console.log('film per genere in foreach',this.filtered_by_genre)
        console.log('------------------------------------------------------');
      }) // fine foreach arr_genres_id
    } // fine if arr_genres.length *********************/
