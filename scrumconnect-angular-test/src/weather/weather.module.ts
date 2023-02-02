import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainerComponent } from './containers/weather.container';
import { WeatherService } from './services/weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';


// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { WeatherRoutingModule } from './weather-routing.module';
import { FormsModule } from '@angular/forms';
import { WeatherSandbox } from './sandbox/weather.sandbox.service';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
     StoreModule.forFeature('weather', reducers),
    EffectsModule.forFeature(effects),
    WeatherRoutingModule
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainerComponent
  ],
  providers: [
    WeatherSandbox,
    WeatherService
  ],
  exports: [
    WeatherContainerComponent
  ]
})
export class WeatherModule { }
