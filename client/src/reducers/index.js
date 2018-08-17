import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer'
import postsReducer from './postsReducer'
import articlesReducer from './articlesReducer'
import commentsReducer from './commentsReducer'

export default combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  articles: articlesReducer,
  comments: commentsReducer,
});
