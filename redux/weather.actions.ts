import { action } from 'typesafe-actions'
import { IWeather } from './weather.types'

enum ActionTypes {
  ON_CITY_CHANGE = 'ON_CITY_CHANGE',
  ADD_CITY = 'ADD_CITY',
  REMOVE_CITY = 'REMOVE_CITY',
  SET_WEATHER = 'SET_WEATHER',
  SET_LOADING = 'SET_LOADING'
}

export default ActionTypes

export function onCityChange(name: string) {
  return action(ActionTypes.ON_CITY_CHANGE, name)
}

export function addCity(name: string) {
  return action(ActionTypes.ADD_CITY, name)
}

export function removeCity(name: string) {
  return action(ActionTypes.REMOVE_CITY, name)
}

export function setWeather(weather: { city: string; weather: IWeather }) {
  return action(ActionTypes.SET_WEATHER, weather)
}

export function setLoading(loading: boolean) {
  return action(ActionTypes.SET_LOADING, loading)
}
