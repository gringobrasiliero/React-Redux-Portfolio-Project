import { FETCH_CATPOSTS} from '../actions/category-actions'
import { FETCH_POSTS} from '../actions/posts-actions'
import { NEW_POST, DELETE_OLD_POST} from '../actions/posts-actions'
import initialState from './initialState';

export default (state = initialState.posts, action) => {
  switch(action.type) {

    case FETCH_POSTS:
      return [ ...action.payload];

    case FETCH_CATPOSTS:
      return [ ...action.payload]

    case NEW_POST:
      return [...state.concat(action.payload)]

    case DELETE_OLD_POST:
      return [...state.filter(post => post.id !== action.payload.id)]

    default:
      return state
  }
}
