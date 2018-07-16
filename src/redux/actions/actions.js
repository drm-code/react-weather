import { SET_SUMMARIES, SET_CHIPS, SET_SELECTED_CITY,
  SET_FIVE_DAY_FORECAST
} from './types'
import cities from './../../mock/cities.json'
import Weather from './../../rest/weather'

const SEGMENTS = 8

export const getSummaries = (ids) => async (dispatch) => {
  try {
    const req = ids.length > 0 ? ids : cities.map(c => c.id)
    const data = await Weather.getSummaries(req)
    const summaries = data.data.list.map((summ) => {
      return {
        id: summ.id,
        name: cities.filter(c => c.id === summ.id)[0].city,
        temp: summ.main.temp,
        icon: summ.weather[0].icon,
        condition: summ.weather[0].main
      }
    })
    const chips = summaries.length === cities.length ? [] : summaries.map(s => s.name)

    dispatch(setSummaries(summaries))
    dispatch(setChips(chips))
  } catch (error) {
    console.error(error);
  }
}

const setSummaries = (payload) => {
  return {
    type: SET_SUMMARIES,
    payload
  }
}

export const setChips = (payload) => {
  return {
    type: SET_CHIPS,
    payload
  }
}

export const getForecast = (city) => async (dispatch) => {
  try {
    dispatch(setFiveDayForecast({}))
    const data = await Weather.getForecast(city)
    const forecastData = {
      name: cities.filter(c => c.id === city)[0].city,
      fiveDayForecast: data.data.list.filter((forecast, index) => index % SEGMENTS === 0),
      coord: data.data.city.coord
    }
    dispatch(setFiveDayForecast(forecastData))
    dispatch(setSelectedCity(city))
  } catch (error) {
    console.error(error);
  }
}

const setSelectedCity = (payload) => {
  return {
    type: SET_SELECTED_CITY,
    payload
  }
}

const setFiveDayForecast = (payload) => {
  return {
    type: SET_FIVE_DAY_FORECAST,
    payload
  }
}
