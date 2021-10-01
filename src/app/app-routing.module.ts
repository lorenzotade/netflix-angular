import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {SearchComponent} from "./search/search.component";
import {SingleMovieComponent} from "./single-movie/single-movie.component";

const routes: Routes = [
  {path: '', component: ContentComponent, pathMatch: 'full'},
  {path: 'home', component: ContentComponent},
  {path: 'search', component: SearchComponent},
  {path: 'movie/:id', component: SingleMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
