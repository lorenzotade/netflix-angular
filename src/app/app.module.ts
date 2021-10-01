import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from "@angular/material/card";
import { SearchComponent } from './search/search.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { SingleMovieComponent } from './single-movie/single-movie.component';
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CardComponent,
    SearchComponent,
    SingleMovieComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatCardModule,
		MatButtonToggleModule,
		MatInputModule,
		FormsModule,
		MatExpansionModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
