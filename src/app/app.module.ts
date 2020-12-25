import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TourComponent} from './tour/tour.component';
import { HeroTourComponent } from './hero-tour/hero-tour.component';


@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    HeroTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
