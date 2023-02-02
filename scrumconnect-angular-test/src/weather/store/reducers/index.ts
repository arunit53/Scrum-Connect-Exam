import { ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWeatherStateReducer from '../reducers/weather.reducers';


export interface CityWeatherForecastState {
    cityWeatherForecastData: fromWeatherStateReducer.CityWeatherForecastState;
}


export const reducers: ActionReducerMap<CityWeatherForecastState> = {
    cityWeatherForecastData: fromWeatherStateReducer.cityWeatherForecastReducer
};

export const selectCityWeatherState = createFeatureSelector<CityWeatherForecastState>('weather');
