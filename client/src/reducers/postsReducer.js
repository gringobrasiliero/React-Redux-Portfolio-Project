import { FETCH_POSTS} from '../actions/posts-actions'
import initialState from './initialState';


export default (state = initialState.posts, action) => {
  switch(action.type) {

    case FETCH_POSTS:
      return [...state, ...action.payload]

    default:
      return state
  }
}
