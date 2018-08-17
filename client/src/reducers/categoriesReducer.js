import {FETCH_CATEGORIES, NEW_CATEGORY} from '../actions/category-actions'
import initialState from './initialState';

export default (state = initialState.categories, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
        return [...state, ...action.payload]

    case NEW_CATEGORY:
      return [...state.concat(action.payload)]

    default:
      return state
    }
}
