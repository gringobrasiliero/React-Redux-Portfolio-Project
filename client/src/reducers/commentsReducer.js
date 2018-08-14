import initialState from './initialState';
import {FETCH_COMMENTS, NEW_COMMENT} from '../actions/comment-actions'



export default (state = initialState.comments, action) => {
  switch(action.type) {

    case FETCH_COMMENTS:
      let index = state.findIndex(el => el.id === action.payload.id);

      if(index === -1) {
        return [...action.payload]
      };


    case NEW_COMMENT:
      return [...state, ...action.payload];

    default:
      return state
    }
}
