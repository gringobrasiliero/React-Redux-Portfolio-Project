import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer'
import postsReducer from './postsReducer'
import articlesReducer from './articlesReducer'
import commentsReducer from './commentsReducer'
import locationReducer from './locationReducer'

export default combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  articles: articlesReducer,
  comments: commentsReducer,
  locations: locationReducer
});
