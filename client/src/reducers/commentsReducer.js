import initialState from './initialState';
import {FETCH_COMMENTS, NEW_COMMENT} from '../actions/comment-actions'


export default (state = initialState.comments, action) => {
  switch(action.type) {

    case NEW_COMMENT:
      return [...state.concat(action.payload)];


    case FETCH_COMMENTS:
      return [...action.payload]

    default:
      return state
    }
}
