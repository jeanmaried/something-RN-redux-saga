import { ActionType } from 'typesafe-actions'
import * as actions from './weather.actions'

export interface IWeatherState {
  city: string
  cities: string[]
  weather: WeatherObj
  isLoading: boolean
}

export interface IWeather {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

type WeatherObj = {
  [key: string]: IWeather
}

export type WeatherActions = ActionType<typeof actions>
