import {FETCH_ARTICLES} from '../actions/article-actions'

import initialState from './initialState';

export default (state = initialState.articles, action) => {
  switch(action.type) {
    case FETCH_ARTICLES:
        state.articles = undefined;
        return [ ...action.payload.articles]


      default:
        return state
      }
  }
