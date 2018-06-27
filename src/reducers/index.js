import { combineReducers } from 'redux'

import  { SELECT_FOODTYPE, RECEIVE_FOODS, REQUEST_FOODS, INVALIDATE_FOODTYPE } from '../actions/index.js'

const foodTypes = (state = [], action) => {
  switch(action.type) {
    case SELECT_FOODTYPE:
      return [...state,
      {
        id: action.id,
        title: action.title,
        content: action.content,
        price: action.price,

      }]
    case LOAD_FOODTYPE:
      return
    default:
      return state
  }
}



const rootReducer = combineReducers({
  foodTypes
})

export default rootReducer
