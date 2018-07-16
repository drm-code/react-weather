import { SET_SUMMARIES, SET_CHIPS } from './types'
import cities from './../../mock/cities.json'
import Weather from './../../rest/weather'

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
