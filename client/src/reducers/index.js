import { combineReducers } from 'redux';
import voteReducer from './voteReducer';
import categoriesReducer from './categoriesReducer'

export default combineReducers({
  // votes: votesReducer
categories: categoriesReducer
});
