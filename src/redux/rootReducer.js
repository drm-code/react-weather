import cities from './../mock/cities.json'
import { SET_SUMMARIES, SET_CHIPS, SET_SELECTED_CITY,
  SET_FIVE_DAY_FORECAST
} from './actions/types'

const initialState = {
  selectedCity: cities[0].id,
  cities: cities.map(c => c.id),
  summaries: [],
  chips: [],
  forecast: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SUMMARIES: {
      return {
        ...state,
        cities: action.payload.map(s => s.id),
        summaries: action.payload
      }
    }

    case SET_CHIPS: {
      return { ...state, chips: action.payload }
    }

    case SET_SELECTED_CITY: {
      return { ...state, selectedCity: action.payload }
    }

    case SET_FIVE_DAY_FORECAST: {
      return { ...state, forecast: action.payload }
    }

    default: {
      return state
    }
  }
}
