import {LOADING_CATEGORIES, FETCH_CATEGORIES} from '../actions/categoryActions'


export default function categoriesReducer(state = {
  loading: false,
  categories: [{category: "ALL" }]

}, action) {

  switch (action.type) {
    case 'LOADING_CATEGORIES':
    console.log(action.type)
      return Object.assign({}, state, {loading: true})


    case 'FETCH_CATEGORIES':
    console.log(action.payload)
      return {loading: false, categories: action.payload}

    default:
      return state;
    }
};
