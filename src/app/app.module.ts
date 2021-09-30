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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CardComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatCardModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
