import API from '../api'

export default class WeatherAPI {
  static async getWeatherData(city: string) {
    return await API.get('', {
      params: {
        q: city
      }
    })
  }
}
