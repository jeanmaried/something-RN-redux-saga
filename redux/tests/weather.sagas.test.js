import WeatherSagas from '../weather.sagas'
import { setLoading, setWeather } from '../weather.actions'
import { runSaga } from '@redux-saga/core'
import WeatherAPI from '../weather.service'

const mockWeatherData = {
  feels_like: 20,
  humidity: 10,
  pressure: 10,
  temp: 27,
  temp_max: 27,
  temp_min: 27
}

describe('addCitySaga', () => {
  it('should set weather for a new city', async () => {
    const requestWeatherData = jest
      .spyOn(WeatherAPI, 'getWeatherData')
      .mockImplementation(() => Promise.resolve(mockWeatherData))
    const payload = 'Paris'
    const dispatched = []

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      WeatherSagas.addCitySaga,
      { payload }
    )

    expect(requestWeatherData).toHaveBeenCalledTimes(1)
    expect(dispatched).toEqual([
      setLoading(true),
      setWeather({
        city: payload,
        weather: mockWeatherData
      }),
      setLoading(false)
    ])
    requestWeatherData.mockClear()
  })

  it('should not set weather for a false city', async () =>{
    const requestWeatherData = jest
        .spyOn(WeatherAPI, 'getWeatherData')
        .mockImplementation(() => Promise.reject())
    const payload = 'Taco'
    const dispatched = []

    await runSaga(
        {
          dispatch: (action) => dispatched.push(action)
        },
        WeatherSagas.addCitySaga,
        { payload }
    )

    expect(requestWeatherData).toHaveBeenCalledTimes(1)
    expect(dispatched).toEqual([
      setLoading(true),
      setLoading(false)
    ])
    requestWeatherData.mockClear()
  })
})
