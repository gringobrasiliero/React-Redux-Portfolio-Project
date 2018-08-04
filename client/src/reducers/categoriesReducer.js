import {LOADING_CATEGORIES, FETCH_CATEGORIES} from '../actions/categoryActions'


export default function categoriesReducer(state = {
  loading: false,
  categories: [],

}, action) {
  console.log(action)
  switch (action.type) {
    case 'LOADING_CATEGORIES':
      return Object.assign({}, state, {loading: true})


    case 'FETCH_CATEGORIES':
      return {loading: false, category: action.payload}

    default:
      return state;
    }
};
