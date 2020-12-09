import { takeEvery, put, call } from 'redux-saga/effects'
import ActionTypes, { addCity, setLoading, setWeather } from './weather.actions'
import WeatherAPI from './weather.service'

export default class WeatherSagas {
  static *addCitySaga({ payload: city }: ReturnType<typeof addCity>) {
    yield put(setLoading(true))
    try {
      const res = yield call(WeatherAPI.getWeatherData, city)
      yield put(setWeather({ city, weather: res }))
    } catch (e) {
      console.log(e)
    }
    yield put(setLoading(false))
  }

  test(){}

  test2(){}

  hi(){}

  static *watchAddCityAsync() {
    yield takeEvery(ActionTypes.ADD_CITY, WeatherSagas.addCitySaga)
  }
}
