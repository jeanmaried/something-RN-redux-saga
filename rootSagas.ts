import {all} from 'redux-saga/effects';
import WeatherSagas from './redux/weather.sagas';

export default function* rootSaga() {
    yield all([WeatherSagas.watchAddCityAsync()])
}
