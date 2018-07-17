import cities from './../mock/cities.json'
import { SET_SUMMARIES, SET_CHIPS, SET_SELECTED_CITY,
  SET_FIVE_DAY_FORECAST, SET_FILTER_TYPE, SET_TEMP
} from './actions/types'

const initialState = {
  selectedCity: cities[0].id,
  cities: cities.map(c => c.id),
  summaries: [],
  chips: [],
  forecast: {},
  filterType: 'name',
  temperature: {
    min: 0,
    max: 0
  }
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

    case SET_FILTER_TYPE: {
      return { ...state, filterType: action.payload }
    }

    case SET_TEMP: {
      return {
        ...state,
        temperature: {
          ...state.temperature,
          [action.payload.key]: action.payload.value
        }
      }
    }

    default: {
      return state
    }
  }
}
