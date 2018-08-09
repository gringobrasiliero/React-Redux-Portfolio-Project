import { combineReducers } from 'redux';
import voteReducer from './voteReducer';
import categoriesReducer from './categoriesReducer'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'
import articlesReducer from './articlesReducer'


export default combineReducers({
  votes: voteReducer,
categories: categoriesReducer,
posts: postsReducer,
users: usersReducer,
articles: articlesReducer
});
