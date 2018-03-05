import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ApiService} from './services/api.service';
import {FoursquareService} from './services/foursquare.service';
import {VenuesComponent} from './components/venues.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    VenuesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    FormsModule,
    MatCardModule
  ],
  providers: [
    ApiService,
    FoursquareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
