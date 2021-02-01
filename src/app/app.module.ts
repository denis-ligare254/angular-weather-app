import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherItemListComponent } from './weather-item-list/weather-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
