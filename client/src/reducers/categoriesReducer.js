<<<<<<< master
<<<<<<< master
import {LOAD_CATEGORIES, FETCH_CATEGORIES, FETCH_CATPOSTS} from '../actions/categoryActions'
import initialState from './initialState';


export default (state = initialState.categories, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
    let index = state.findIndex(el => el.category_id == action.payload.category_id);
=======
import {LOADING_CATEGORIES, FETCH_CATEGORIES} from '../actions/categoryActions'
=======
import {LOAD_CATEGORIES, FETCH_CATEGORIES} from '../actions/categoryActions'
>>>>>>> Component will update.

let initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
      return [...state, ...action.payload]



    default:
      return state
}
}












// export default function categoriesReducer(state = initial_state, action) {
//
//   switch (action.type) {
//     case 'LOADING_CATEGORIES':
//     console.log(action.type)
//       return Object.assign({}, state,)
//
//
//     case 'FETCH_CATEGORIES':
//       return {...state, ...action.payload}
//
//     default:
//       return state;
//     }
// };
