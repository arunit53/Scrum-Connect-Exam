import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
WeatherForecastTypes,
RequestWeatherForecastByCityName,
RequestWeatherForecastByCityNameResponse,
RequestWeatherForecastByCityNameError
} from '../actions';

import { of } from 'rxjs';
import {catchError , filter, map, switchMap, mergeMap, withLatestFrom, tap} from 'rxjs/operators';
import { WeatherService} from '../../services/weather.service';
import { AppState } from '../../..//shared/store/reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class WeatherForecastEffects {
    loadWeatherForecast$ = createEffect(() =>
    this.actions$.pipe(
        ofType<RequestWeatherForecastByCityName>(WeatherForecastTypes.RequestWeatherForecastByCityName),
        switchMap((action) =>
        this.weatherService.searchWeatherForCity(action.cityNameValue).pipe(
            map(content => new RequestWeatherForecastByCityNameResponse({response: content})),
            catchError(error => of(new RequestWeatherForecastByCityNameError({error})))
        ))

    )
    );

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService,
        private store: Store<AppState>
    ) {}

}
