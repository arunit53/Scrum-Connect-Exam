import { Component, OnInit } from '@angular/core';
import { WeatherModel } from 'src/weather/model/weather.model';
import { WeatherSandbox } from '../sandbox/weather.sandbox.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherContainerComponent {
  cityWeatherList:WeatherModel[] = [];
  serviceStatus;
  constructor(private weatherSandboxService: WeatherSandbox) {}

  citySearch(cityName: string) {
    if (cityName !== '') {
      this.weatherSandboxService.getForecastForCity(cityName);
      this.getCitySearchResults();
    }

  }

  getCitySearchResults() {
    this.weatherSandboxService.getCityForecast$.subscribe((result) => {
      this.cityWeatherList = result.uniqueList;
      this.serviceStatus = result.serviceStatus;
    });
  }


}
