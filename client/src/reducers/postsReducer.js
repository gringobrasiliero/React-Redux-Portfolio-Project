import { FETCH_CATPOSTS} from '../actions/category-actions'
import { FETCH_POSTS} from '../actions/posts-actions'
import { NEW_POST} from '../actions/posts-actions'
import initialState from './initialState';

export default (state = initialState.posts, action) => {
  switch(action.type) {

    case FETCH_POSTS:
      return [ ...action.payload];

    case FETCH_CATPOSTS:
      return [ ...action.payload]

    case NEW_POST:
      return [...state.concat(action.payload)]

    default:
      return state
  }
}
