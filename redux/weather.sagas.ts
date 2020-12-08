import { takeEvery, put, call } from 'redux-saga/effects'
import ActionTypes, { addCity, setLoading, setWeather } from './weather.actions'
import { getWeatherData } from './weather.service'

export default class WeatherSagas {
  static *addCitySaga({ payload: city }: ReturnType<typeof addCity>) {
    yield put(setLoading(true))
    const res = yield call(getWeatherData, city)
    yield put(setWeather({ city, weather: res }))
    yield put(setLoading(false))
  }

  static *watchAddCityAsync() {
    yield takeEvery(ActionTypes.ADD_CITY, WeatherSagas.addCitySaga)
  }
}
