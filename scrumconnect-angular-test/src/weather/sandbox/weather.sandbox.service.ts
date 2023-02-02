import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Sandbox } from 'src/shared/sandbox/base.sandbox';
import { AppState } from 'src/shared/store/reducers';
import {
    RequestWeatherForecastByCityName,
    requestCityForecastSelector

} from '../store';

@Injectable()

export class WeatherSandbox extends Sandbox {

    constructor(protected store$: Store<AppState>) {
        super(store$);
    }

    public getCityForecast$ = this.store$.pipe(select(requestCityForecastSelector));

    getForecastForCity(cityName: string) {
        this.store$.dispatch(new RequestWeatherForecastByCityName(cityName));
    }
}
