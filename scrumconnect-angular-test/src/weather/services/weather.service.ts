import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    APPID: '22155d582bc55be8556f8c36b4038528'
  };

  constructor(private httpClient: HttpClient) { }

  searchWeatherForCity(city) {
    // implement the service
    return this.httpClient.get(
      this.apiUrl +
      '?q=' +
      city +
      '&cnt=8&units=metric&appid=22155d582bc55be8556f8c36b4038528').pipe(map((res) => res));
  }

}
