<<<<<<< master
import {LOAD_CATEGORIES, FETCH_CATEGORIES, FETCH_CATPOSTS} from '../actions/categoryActions'
import initialState from './initialState';


export default (state = initialState.categories, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
    let index = state.findIndex(el => el.category_id == action.payload.category_id);
=======
import {LOADING_CATEGORIES, FETCH_CATEGORIES} from '../actions/categoryActions'


export default function categoriesReducer(state = {
  loading: false,
  categories: [],

}, action) {

  switch (action.type) {
    case 'LOADING_CATEGORIES':
    console.log(action.type)
      return Object.assign({}, state, {loading: true})


    case 'FETCH_CATEGORIES':
    console.log(action.payload)
      return {loading: false, categories: action.payload}

    if(index == -1) {
      return [...state, ...action.payload]
}

      case FETCH_CATPOSTS:
      let indexOfPosts = state.findIndex(el => el.category_id == action.payload.category_id);

      if(indexOfPosts == -1) {
        return [...state, ...action.payload]
}
    default:
      return state
  }
}
