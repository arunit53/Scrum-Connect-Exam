import { WeatherForecastTypes, WeatherForecastActions } from '../actions';
import {updateObject, getCityWeatherForecast } from '../../shared/helpers/utils';
import { WeatherModel } from 'src/weather/model/weather.model';

export interface CityWeatherForecastState {
    weatherForecastByCity: any;
    serviceResponseStatus: string;
    cityWeatherForecastList: Array<any>[];
    errorResponse: any;
}

export const initialCityWeatherForecastState: CityWeatherForecastState = {
    weatherForecastByCity: {},
    serviceResponseStatus: '',
    cityWeatherForecastList: [],
    errorResponse: {}
};

export function cityWeatherForecastReducer(
    state = initialCityWeatherForecastState,
    action: WeatherForecastActions
): CityWeatherForecastState {
    switch (action.type) {
        case WeatherForecastTypes.RequestWeatherForecastByCityNameResponse : {
           const newCityWeatherForecast:WeatherModel = getCityWeatherForecast(action.payload.response);
           return updateObject(state, {
                weatherForecastByCity: action.payload.response,
                cityWeatherForecastList: [...state.cityWeatherForecastList , newCityWeatherForecast ],
                serviceResponseStatus: 'success'
            });
        }
        case WeatherForecastTypes.RequestWeatherForecastByCityNameError : {
            return updateObject(state, {
                errorResponse: action.payload.error,
                cityWeatherForecastList: [...state.cityWeatherForecastList],
                serviceResponseStatus: 'failure'
            });
        }
        default : {
            return state;
        }
    }
}
