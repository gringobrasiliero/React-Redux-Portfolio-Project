import {LOADING_CATEGORIES, FETCH_CATEGORIES} from '../actions/categoryActions'

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
