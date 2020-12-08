import { combineReducers } from 'redux'
import weatherReducer from './redux/weather.reducer'
import {IWeatherState} from './redux/weather.types';

export interface IRootState {
    weather: IWeatherState
}
export default combineReducers({ weather: weatherReducer })
