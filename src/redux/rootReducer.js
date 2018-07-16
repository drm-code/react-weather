import cities from './../mock/cities.json'
import { SET_SUMMARIES, SET_CHIPS } from './actions/types'

const initialState = {
  selectedCity: cities[0].id,
  cities: cities.map(c => c.id),
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

    default: {
      return state
    }
  }
}
