<<<<<<< master
<<<<<<< master
import { FETCH_POSTS} from '../actions/posts-actions'
import initialState from './initialState';


export default (state = initialState.posts, action) => {
  switch(action.type) {

    case FETCH_POSTS:
    let index = state.findIndex(el => el.post_id === action.payload.post_id);

    if(index === -1) {
      return [...state, ...action.payload];
}
=======
import { FETCH_POSTS} from '../actions/posts-actions'

let initialState = []

export default (state = initialState, action) => {
  switch(action.type) {

    case FETCH_POSTS:
      return [...state, ...action.payload]

>>>>>>> Categories will no longer duplicate.
    default:
      return state
  }
}
<<<<<<< master
=======
>>>>>>> Component will update.
=======
>>>>>>> Categories will no longer duplicate.
