import { combineReducers } from 'redux';
import voteReducer from './voteReducer';
import categoriesReducer from './categoriesReducer'
import postsReducer from './postsReducer'
export default combineReducers({
  // votes: votesReducer
categories: categoriesReducer,
posts: postsReducer
});
