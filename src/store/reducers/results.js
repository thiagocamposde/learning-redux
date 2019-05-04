import * as actionsTypes from '../actions'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionsTypes.STORE_RESULT:
      return { ...state, results: state.results.concat({ id: new Date(), value: action.payload.counter }) }
    case actionsTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => {
          return result.id !== action.payload.id
        })
      }
    default:
      return state
  }
}

export default reducer