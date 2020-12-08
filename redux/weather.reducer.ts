import ActionTypes from './weather.actions'
import { IWeatherState, WeatherActions } from './weather.types'

const initialState: IWeatherState = {
  city: '',
  cities: [],
  weather: {},
  isLoading: false
}

const weatherReducer = (
  state: IWeatherState = initialState,
  action: WeatherActions
): IWeatherState => {
  switch (action.type) {
    case ActionTypes.ON_CITY_CHANGE:
      return {
        ...state,
        city: action.payload
      }

    case ActionTypes.ADD_CITY:
      return {
        ...state,
        cities: state.cities.length
          ? [...state.cities, action.payload]
          : [action.payload]
      }

    case ActionTypes.REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter((cityName) => cityName !== action.payload)
      }

    case ActionTypes.SET_WEATHER:
      const { city, weather } = action.payload
      return {
        ...state,
        weather: { ...state.weather, [city]: weather }
      }

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default weatherReducer
