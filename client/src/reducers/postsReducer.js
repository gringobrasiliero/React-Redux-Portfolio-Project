
import { FETCH_POSTS} from '../actions/posts-actions'
import { NEW_POST} from '../actions/posts-actions'
import { FETCH_CATPOSTS} from '../actions/category-actions'
import initialState from './initialState';


export default (state = initialState.posts, action) => {
  let index = state.findIndex(el => el.post_id === action.payload.post_id);
  switch(action.type) {

    case FETCH_POSTS:


      if(index === -1) {
        return [ ...action.payload];

      }


      case FETCH_CATPOSTS:
          return [ ...action.payload]
      

    case NEW_POST:
      return [...state, ...action.payload]

    default:
      return state
  }
}
