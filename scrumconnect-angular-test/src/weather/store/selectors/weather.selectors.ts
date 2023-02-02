import { createSelector } from '@ngrx/store';
import { WeatherModel } from 'src/weather/model/weather.model';
import {selectCityWeatherState} from '../reducers';


export const requestCityForecastSelector = createSelector(
    selectCityWeatherState,
    (weatherState) => {
        let response = [];
        let uniqueList: WeatherModel[] = [];
        const serviceStatus = weatherState.cityWeatherForecastData.serviceResponseStatus;
        if (serviceStatus !== '') {
            response = weatherState.cityWeatherForecastData.cityWeatherForecastList;
            uniqueList = response.filter(
                (eachItem, i, arr) => arr.findIndex(t => t.id === eachItem.id) === i
                );
        }
        return { uniqueList, serviceStatus };
    }
);
