import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import Spy = jasmine.Spy;
import { first } from 'rxjs/operators';
import { WeatherService } from './weather.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';


describe('Weather Service', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let weatherService: WeatherService;
  const cityName = 'London';


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    weatherService = new WeatherService(httpClientSpy as any);
  });

  it('should return city weather forcast for a valid city called', () => {
   const response = {
      cod: '200',
      message: 0,
      cnt: 40,
      list: [
         {
            dt: 1675263600,
            main: {
               temp: 260.98,
               feels_like: 253.98,
               temp_min: 260.98,
               temp_max: 263.57,
               pressure: 1029,
               sea_level: 1029,
               grnd_level: 1007,
               humidity: 71,
               temp_kf: -2.59
            },
            weather: [
               {
                  id: 800,
                  main: 'Clear',
                  description: 'clear sky',
                  icon: '01d'
               }
            ],
            clouds: {
               all: 4
            },
            wind: {
               speed: 4.01,
               deg: 233,
               gust: 7.58
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-01 15:00:00'
         },
         {
            dt: 1675274400,
            main: {
               temp: 265.21,
               feels_like: 258.21,
               temp_min: 265.21,
               temp_max: 267.97,
               pressure: 1028,
               sea_level: 1028,
               grnd_level: 1005,
               humidity: 66,
               temp_kf: -2.76
            },
            weather: [
               {
                  id: 800,
                  main: 'Clear',
                  description: 'clear sky',
                  icon: '01d'
               }
            ],
            clouds: {
               all: 3
            },
            wind: {
               speed: 5.22,
               deg: 226,
               gust: 8.54
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-01 18:00:00'
         },
         {
            dt: 1675285200,
            main: {
               temp: 269.52,
               feels_like: 263.75,
               temp_min: 269.52,
               temp_max: 269.52,
               pressure: 1026,
               sea_level: 1026,
               grnd_level: 1003,
               humidity: 69,
               temp_kf: 0
            },
            weather: [
               {
                  id: 800,
                  main: 'Clear',
                  description: 'clear sky',
                  icon: '01d'
               }
            ],
            clouds: {
               all: 0
            },
            wind: {
               speed: 4.91,
               deg: 224,
               gust: 9.51
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-01 21:00:00'
         },
         {
            dt: 1675296000,
            main: {
               temp: 267.72,
               feels_like: 262.12,
               temp_min: 267.72,
               temp_max: 267.72,
               pressure: 1026,
               sea_level: 1026,
               grnd_level: 1003,
               humidity: 75,
               temp_kf: 0
            },
            weather: [
               {
                  id: 801,
                  main: 'Clouds',
                  description: 'few clouds',
                  icon: '02n'
               }
            ],
            clouds: {
               all: 19
            },
            wind: {
               speed: 4.09,
               deg: 225,
               gust: 11.14
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-02 00:00:00'
         },
         {
            dt: 1675306800,
            main: {
               temp: 267.25,
               feels_like: 261.75,
               temp_min: 267.25,
               temp_max: 267.25,
               pressure: 1025,
               sea_level: 1025,
               grnd_level: 1002,
               humidity: 74,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 94
            },
            wind: {
               speed: 3.84,
               deg: 225,
               gust: 11.15
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-02 03:00:00'
         },
         {
            dt: 1675317600,
            main: {
               temp: 267.45,
               feels_like: 261.8,
               temp_min: 267.45,
               temp_max: 267.45,
               pressure: 1024,
               sea_level: 1024,
               grnd_level: 1001,
               humidity: 72,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 97
            },
            wind: {
               speed: 4.08,
               deg: 222,
               gust: 11.68
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-02 06:00:00'
         },
         {
            dt: 1675328400,
            main: {
               temp: 267.56,
               feels_like: 261.29,
               temp_min: 267.56,
               temp_max: 267.56,
               pressure: 1022,
               sea_level: 1022,
               grnd_level: 999,
               humidity: 72,
               temp_kf: 0
            },
            weather: [
               {
                  id: 803,
                  main: 'Clouds',
                  description: 'broken clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 75
            },
            wind: {
               speed: 4.93,
               deg: 226,
               gust: 13.36
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-02 09:00:00'
         },
         {
            dt: 1675339200,
            main: {
               temp: 267.35,
               feels_like: 260.92,
               temp_min: 267.35,
               temp_max: 267.35,
               pressure: 1021,
               sea_level: 1021,
               grnd_level: 999,
               humidity: 74,
               temp_kf: 0
            },
            weather: [
               {
                  id: 802,
                  main: 'Clouds',
                  description: 'scattered clouds',
                  icon: '03n'
               }
            ],
            clouds: {
               all: 38
            },
            wind: {
               speed: 5.09,
               deg: 242,
               gust: 14.18
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-02 12:00:00'
         },
         {
            dt: 1675350000,
            main: {
               temp: 268.54,
               feels_like: 262.79,
               temp_min: 268.54,
               temp_max: 268.54,
               pressure: 1021,
               sea_level: 1021,
               grnd_level: 999,
               humidity: 77,
               temp_kf: 0
            },
            weather: [
               {
                  id: 800,
                  main: 'Clear',
                  description: 'clear sky',
                  icon: '01d'
               }
            ],
            clouds: {
               all: 1
            },
            wind: {
               speed: 4.54,
               deg: 256,
               gust: 12.1
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-02 15:00:00'
         },
         {
            dt: 1675360800,
            main: {
               temp: 271.19,
               feels_like: 265.78,
               temp_min: 271.19,
               temp_max: 271.19,
               pressure: 1021,
               sea_level: 1021,
               grnd_level: 999,
               humidity: 75,
               temp_kf: 0
            },
            weather: [
               {
                  id: 800,
                  main: 'Clear',
                  description: 'clear sky',
                  icon: '01d'
               }
            ],
            clouds: {
               all: 3
            },
            wind: {
               speed: 5.01,
               deg: 286,
               gust: 8.13
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-02 18:00:00'
         },
         {
            dt: 1675371600,
            main: {
               temp: 270.97,
               feels_like: 265.37,
               temp_min: 270.97,
               temp_max: 270.97,
               pressure: 1022,
               sea_level: 1022,
               grnd_level: 1000,
               humidity: 77,
               temp_kf: 0
            },
            weather: [
               {
                  id: 801,
                  main: 'Clouds',
                  description: 'few clouds',
                  icon: '02d'
               }
            ],
            clouds: {
               all: 22
            },
            wind: {
               speed: 5.23,
               deg: 318,
               gust: 7.66
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-02 21:00:00'
         },
         {
            dt: 1675382400,
            main: {
               temp: 267.72,
               feels_like: 260.72,
               temp_min: 267.72,
               temp_max: 267.72,
               pressure: 1026,
               sea_level: 1026,
               grnd_level: 1003,
               humidity: 79,
               temp_kf: 0
            },
            weather: [
               {
                  id: 803,
                  main: 'Clouds',
                  description: 'broken clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 60
            },
            wind: {
               speed: 6.32,
               deg: 332,
               gust: 9.69
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-03 00:00:00'
         },
         {
            dt: 1675393200,
            main: {
               temp: 264.32,
               feels_like: 257.32,
               temp_min: 264.32,
               temp_max: 264.32,
               pressure: 1028,
               sea_level: 1028,
               grnd_level: 1005,
               humidity: 79,
               temp_kf: 0
            },
            weather: [
               {
                  id: 802,
                  main: 'Clouds',
                  description: 'scattered clouds',
                  icon: '03n'
               }
            ],
            clouds: {
               all: 29
            },
            wind: {
               speed: 6.67,
               deg: 336,
               gust: 10.57
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-03 03:00:00'
         },
         {
            dt: 1675404000,
            main: {
               temp: 261.63,
               feels_like: 254.63,
               temp_min: 261.63,
               temp_max: 261.63,
               pressure: 1031,
               sea_level: 1031,
               grnd_level: 1007,
               humidity: 80,
               temp_kf: 0
            },
            weather: [
               {
                  id: 802,
                  main: 'Clouds',
                  description: 'scattered clouds',
                  icon: '03n'
               }
            ],
            clouds: {
               all: 31
            },
            wind: {
               speed: 6.09,
               deg: 329,
               gust: 9.92
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-03 06:00:00'
         },
         {
            dt: 1675414800,
            main: {
               temp: 259.66,
               feels_like: 252.66,
               temp_min: 259.66,
               temp_max: 259.66,
               pressure: 1032,
               sea_level: 1032,
               grnd_level: 1008,
               humidity: 80,
               temp_kf: 0
            },
            weather: [
               {
                  id: 801,
                  main: 'Clouds',
                  description: 'few clouds',
                  icon: '02n'
               }
            ],
            clouds: {
               all: 22
            },
            wind: {
               speed: 5.72,
               deg: 329,
               gust: 9.92
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-03 09:00:00'
         },
         {
            dt: 1675425600,
            main: {
               temp: 258.34,
               feels_like: 251.34,
               temp_min: 258.34,
               temp_max: 258.34,
               pressure: 1034,
               sea_level: 1034,
               grnd_level: 1010,
               humidity: 80,
               temp_kf: 0
            },
            weather: [
               {
                  id: 801,
                  main: 'Clouds',
                  description: 'few clouds',
                  icon: '02n'
               }
            ],
            clouds: {
               all: 24
            },
            wind: {
               speed: 5.1,
               deg: 325,
               gust: 8.58
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-03 12:00:00'
         },
         {
            dt: 1675436400,
            main: {
               temp: 258.51,
               feels_like: 251.51,
               temp_min: 258.51,
               temp_max: 258.51,
               pressure: 1036,
               sea_level: 1036,
               grnd_level: 1012,
               humidity: 74,
               temp_kf: 0
            },
            weather: [
               {
                  id: 801,
                  main: 'Clouds',
                  description: 'few clouds',
                  icon: '02d'
               }
            ],
            clouds: {
               all: 18
            },
            wind: {
               speed: 4.53,
               deg: 320,
               gust: 6.22
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-03 15:00:00'
         },
         {
            dt: 1675447200,
            main: {
               temp: 261.17,
               feels_like: 254.94,
               temp_min: 261.17,
               temp_max: 261.17,
               pressure: 1036,
               sea_level: 1036,
               grnd_level: 1013,
               humidity: 65,
               temp_kf: 0
            },
            weather: [
               {
                  id: 801,
                  main: 'Clouds',
                  description: 'few clouds',
                  icon: '02d'
               }
            ],
            clouds: {
               all: 24
            },
            wind: {
               speed: 3.26,
               deg: 325,
               gust: 3.83
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-03 18:00:00'
         },
         {
            dt: 1675458000,
            main: {
               temp: 262.68,
               feels_like: 258.11,
               temp_min: 262.68,
               temp_max: 262.68,
               pressure: 1035,
               sea_level: 1035,
               grnd_level: 1011,
               humidity: 61,
               temp_kf: 0
            },
            weather: [
               {
                  id: 801,
                  main: 'Clouds',
                  description: 'few clouds',
                  icon: '02d'
               }
            ],
            clouds: {
               all: 22
            },
            wind: {
               speed: 2.24,
               deg: 326,
               gust: 2.54
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-03 21:00:00'
         },
         {
            dt: 1675468800,
            main: {
               temp: 262.49,
               feels_like: 262.49,
               temp_min: 262.49,
               temp_max: 262.49,
               pressure: 1034,
               sea_level: 1034,
               grnd_level: 1011,
               humidity: 66,
               temp_kf: 0
            },
            weather: [
               {
                  id: 801,
                  main: 'Clouds',
                  description: 'few clouds',
                  icon: '02n'
               }
            ],
            clouds: {
               all: 24
            },
            wind: {
               speed: 0.42,
               deg: 253,
               gust: 0.85
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-04 00:00:00'
         },
         {
            dt: 1675479600,
            main: {
               temp: 263.19,
               feels_like: 258.14,
               temp_min: 263.19,
               temp_max: 263.19,
               pressure: 1033,
               sea_level: 1033,
               grnd_level: 1010,
               humidity: 71,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 98
            },
            wind: {
               speed: 2.64,
               deg: 193,
               gust: 4.09
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-04 03:00:00'
         },
         {
            dt: 1675490400,
            main: {
               temp: 263.41,
               feels_like: 257.42,
               temp_min: 263.41,
               temp_max: 263.41,
               pressure: 1031,
               sea_level: 1031,
               grnd_level: 1008,
               humidity: 69,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 99
            },
            wind: {
               speed: 3.47,
               deg: 200,
               gust: 7.87
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-04 06:00:00'
         },
         {
            dt: 1675501200,
            main: {
               temp: 264.35,
               feels_like: 258.07,
               temp_min: 264.35,
               temp_max: 264.35,
               pressure: 1028,
               sea_level: 1028,
               grnd_level: 1005,
               humidity: 63,
               temp_kf: 0
            },
            weather: [
               {
                  id: 802,
                  main: 'Clouds',
                  description: 'scattered clouds',
                  icon: '03n'
               }
            ],
            clouds: {
               all: 42
            },
            wind: {
               speed: 3.98,
               deg: 183,
               gust: 10.97
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-04 09:00:00'
         },
         {
            dt: 1675512000,
            main: {
               temp: 265.6,
               feels_like: 258.73,
               temp_min: 265.6,
               temp_max: 265.6,
               pressure: 1025,
               sea_level: 1025,
               grnd_level: 1002,
               humidity: 62,
               temp_kf: 0
            },
            weather: [
               {
                  id: 802,
                  main: 'Clouds',
                  description: 'scattered clouds',
                  icon: '03n'
               }
            ],
            clouds: {
               all: 27
            },
            wind: {
               speed: 5.08,
               deg: 188,
               gust: 13.61
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-04 12:00:00'
         },
         {
            dt: 1675522800,
            main: {
               temp: 268.29,
               feels_like: 261.46,
               temp_min: 268.29,
               temp_max: 268.29,
               pressure: 1022,
               sea_level: 1022,
               grnd_level: 999,
               humidity: 63,
               temp_kf: 0
            },
            weather: [
               {
                  id: 802,
                  main: 'Clouds',
                  description: 'scattered clouds',
                  icon: '03d'
               }
            ],
            clouds: {
               all: 38
            },
            wind: {
               speed: 6.12,
               deg: 195,
               gust: 15.61
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-04 15:00:00'
         },
         {
            dt: 1675533600,
            main: {
               temp: 273.09,
               feels_like: 267.19,
               temp_min: 273.09,
               temp_max: 273.09,
               pressure: 1018,
               sea_level: 1018,
               grnd_level: 996,
               humidity: 67,
               temp_kf: 0
            },
            weather: [
               {
                  id: 802,
                  main: 'Clouds',
                  description: 'scattered clouds',
                  icon: '03d'
               }
            ],
            clouds: {
               all: 50
            },
            wind: {
               speed: 6.93,
               deg: 208,
               gust: 16.32
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-04 18:00:00'
         },
         {
            dt: 1675544400,
            main: {
               temp: 275.16,
               feels_like: 270.14,
               temp_min: 275.16,
               temp_max: 275.16,
               pressure: 1016,
               sea_level: 1016,
               grnd_level: 994,
               humidity: 71,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04d'
               }
            ],
            clouds: {
               all: 100
            },
            wind: {
               speed: 6.24,
               deg: 213,
               gust: 15.04
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-04 21:00:00'
         },
         {
            dt: 1675555200,
            main: {
               temp: 275.03,
               feels_like: 270.12,
               temp_min: 275.03,
               temp_max: 275.03,
               pressure: 1015,
               sea_level: 1015,
               grnd_level: 993,
               humidity: 73,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 100
            },
            wind: {
               speed: 5.93,
               deg: 206,
               gust: 15.53
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-05 00:00:00'
         },
         {
            dt: 1675566000,
            main: {
               temp: 275.28,
               feels_like: 270.19,
               temp_min: 275.28,
               temp_max: 275.28,
               pressure: 1015,
               sea_level: 1015,
               grnd_level: 993,
               humidity: 74,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 100
            },
            wind: {
               speed: 6.48,
               deg: 208,
               gust: 16.54
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-05 03:00:00'
         },
         {
            dt: 1675576800,
            main: {
               temp: 274.38,
               feels_like: 269.24,
               temp_min: 274.38,
               temp_max: 274.38,
               pressure: 1014,
               sea_level: 1014,
               grnd_level: 992,
               humidity: 77,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 100
            },
            wind: {
               speed: 6.05,
               deg: 204,
               gust: 15.96
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-05 06:00:00'
         },
         {
            dt: 1675587600,
            main: {
               temp: 274.64,
               feels_like: 269.6,
               temp_min: 274.64,
               temp_max: 274.64,
               pressure: 1012,
               sea_level: 1012,
               grnd_level: 990,
               humidity: 84,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 100
            },
            wind: {
               speed: 5.98,
               deg: 204,
               gust: 15.07
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-05 09:00:00'
         },
         {
            dt: 1675598400,
            main: {
               temp: 274.82,
               feels_like: 269.96,
               temp_min: 274.82,
               temp_max: 274.82,
               pressure: 1011,
               sea_level: 1011,
               grnd_level: 989,
               humidity: 90,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 100
            },
            wind: {
               speed: 5.7,
               deg: 209,
               gust: 13.33
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-05 12:00:00'
         },
         {
            dt: 1675609200,
            main: {
               temp: 275.03,
               feels_like: 270.18,
               temp_min: 275.03,
               temp_max: 275.03,
               pressure: 1011,
               sea_level: 1011,
               grnd_level: 989,
               humidity: 94,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04d'
               }
            ],
            clouds: {
               all: 100
            },
            wind: {
               speed: 5.79,
               deg: 224,
               gust: 12.68
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-05 15:00:00'
         },
         {
            dt: 1675620000,
            main: {
               temp: 276.47,
               feels_like: 272.13,
               temp_min: 276.47,
               temp_max: 276.47,
               pressure: 1011,
               sea_level: 1011,
               grnd_level: 990,
               humidity: 81,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04d'
               }
            ],
            clouds: {
               all: 98
            },
            wind: {
               speed: 5.53,
               deg: 244,
               gust: 12.11
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-05 18:00:00'
         },
         {
            dt: 1675630800,
            main: {
               temp: 276.35,
               feels_like: 271.99,
               temp_min: 276.35,
               temp_max: 276.35,
               pressure: 1013,
               sea_level: 1013,
               grnd_level: 991,
               humidity: 79,
               temp_kf: 0
            },
            weather: [
               {
                  id: 802,
                  main: 'Clouds',
                  description: 'scattered clouds',
                  icon: '03d'
               }
            ],
            clouds: {
               all: 44
            },
            wind: {
               speed: 5.49,
               deg: 258,
               gust: 11.36
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'd'
            },
            dt_txt: '2023-02-05 21:00:00'
         },
         {
            dt: 1675641600,
            main: {
               temp: 274.33,
               feels_like: 269.86,
               temp_min: 274.33,
               temp_max: 274.33,
               pressure: 1016,
               sea_level: 1016,
               grnd_level: 994,
               humidity: 89,
               temp_kf: 0
            },
            weather: [
               {
                  id: 802,
                  main: 'Clouds',
                  description: 'scattered clouds',
                  icon: '03n'
               }
            ],
            clouds: {
               all: 49
            },
            wind: {
               speed: 4.74,
               deg: 273,
               gust: 10.09
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-06 00:00:00'
         },
         {
            dt: 1675652400,
            main: {
               temp: 274.09,
               feels_like: 270.5,
               temp_min: 274.09,
               temp_max: 274.09,
               pressure: 1018,
               sea_level: 1018,
               grnd_level: 995,
               humidity: 84,
               temp_kf: 0
            },
            weather: [
               {
                  id: 500,
                  main: 'Rain',
                  description: 'light rain',
                  icon: '10n'
               }
            ],
            clouds: {
               all: 100
            },
            wind: {
               speed: 3.34,
               deg: 279,
               gust: 8.1
            },
            visibility: 10000,
            pop: 0.22,
            rain: {
               '3h': 0.14
            },
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-06 03:00:00'
         },
         {
            dt: 1675663200,
            main: {
               temp: 273.02,
               feels_like: 270.18,
               temp_min: 273.02,
               temp_max: 273.02,
               pressure: 1019,
               sea_level: 1019,
               grnd_level: 997,
               humidity: 89,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 96
            },
            wind: {
               speed: 2.31,
               deg: 280,
               gust: 5.15
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-06 06:00:00'
         },
         {
            dt: 1675674000,
            main: {
               temp: 272.68,
               feels_like: 270.33,
               temp_min: 272.68,
               temp_max: 272.68,
               pressure: 1019,
               sea_level: 1019,
               grnd_level: 997,
               humidity: 87,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 97
            },
            wind: {
               speed: 1.86,
               deg: 344,
               gust: 3.74
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-06 09:00:00'
         },
         {
            dt: 1675684800,
            main: {
               temp: 272.56,
               feels_like: 272.56,
               temp_min: 272.56,
               temp_max: 272.56,
               pressure: 1020,
               sea_level: 1020,
               grnd_level: 998,
               humidity: 83,
               temp_kf: 0
            },
            weather: [
               {
                  id: 804,
                  main: 'Clouds',
                  description: 'overcast clouds',
                  icon: '04n'
               }
            ],
            clouds: {
               all: 85
            },
            wind: {
               speed: 1.23,
               deg: 65,
               gust: 1.82
            },
            visibility: 10000,
            pop: 0,
            sys: {
               pod: 'n'
            },
            dt_txt: '2023-02-06 12:00:00'
         }
      ],
      city: {
         id: 4887398,
         name: 'Chicago',
         coord: {
            lat: 41.85,
            lon: -87.65
         },
         country: 'US',
         population: 2695598,
         timezone: -21600,
         sunrise: 1675256599,
         sunset: 1675292694
      }
   };
   httpClientSpy.get.and.returnValue(of(response));
   weatherService.searchWeatherForCity('London').subscribe((result) => {
   expect(result).toEqual(response);
  }),
  expect(httpClientSpy.get).toHaveBeenCalledTimes(1);

});

  it('should return an error when the server returns a 404', () => {
   const errorResponse = { cod: '404', message: 'city not found'};

   httpClientSpy.get.and.returnValue(of(errorResponse));
   weatherService.searchWeatherForCity('Invalid City').subscribe((result) => {
   },
     error  => expect(error.message).toContain('city not found')
   );
  // expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
 });

});
