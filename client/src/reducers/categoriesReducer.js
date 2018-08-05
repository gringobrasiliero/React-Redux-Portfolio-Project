import {LOAD_CATEGORIES, FETCH_CATEGORIES} from '../actions/categoryActions'

let initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
    let index = state.findIndex(el => el.category_id == action.payload.category_id);

    if(index == -1)
      return [...state, ...action.payload]



    default:
      return state
  }
}
