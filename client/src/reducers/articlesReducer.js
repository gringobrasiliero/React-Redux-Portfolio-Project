import initialState from './initialState';
import {FETCH_ARTICLES} from '../actions/article-actions'


export default (state = initialState.articles, action) => {
  switch(action.type) {
    case FETCH_ARTICLES:
        return [...state, ...action.payload.articles]


      default:
        return state
      }
  }
