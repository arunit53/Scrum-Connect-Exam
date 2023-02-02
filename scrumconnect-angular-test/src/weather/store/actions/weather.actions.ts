// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { Action } from '@ngrx/store';

export enum WeatherForecastTypes  {
    RequestWeatherForecastByCityName = '[RequestWeatherForecastByCityName] RequestWeatherForecastByCityName ',
    RequestWeatherForecastByCityNameResponse = '[RequestWeatherForecastByCityNameResponse] RequestWeatherForecastByCityNameResponse ',
    RequestWeatherForecastByCityNameError = '[RequestWeatherForecastByCityNameError] RequestWeatherForecastByCityNameError ',
}

export class RequestWeatherForecastByCityName implements Action {
    readonly type = WeatherForecastTypes.RequestWeatherForecastByCityName;
    constructor(public cityNameValue: string) {}
}

export class RequestWeatherForecastByCityNameResponse implements Action {
    readonly type = WeatherForecastTypes.RequestWeatherForecastByCityNameResponse;
    constructor(public payload: {response: any}) {}
}

export class RequestWeatherForecastByCityNameError implements Action {
    readonly type = WeatherForecastTypes.RequestWeatherForecastByCityNameError;
    constructor(public payload: {error: any}) {}
}

export type WeatherForecastActions =
| RequestWeatherForecastByCityName
| RequestWeatherForecastByCityNameResponse
| RequestWeatherForecastByCityNameError;


