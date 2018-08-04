export const FETCH_CATEGORIES = 'categories:fetchCategories';

// export function fetchCategories() {
// console.log("Fetching Categories")
//   return function(dispatch){
//     dispatch({type: 'LOADING_CATEGORIES'})
//     return   fetch('/categories.json').then(response => response.json())
//         .then(categories => dispatch({type: 'FETCH_CATEGORIES', payload: categories}))
// debugger
//   }
// }



export function fetchCategories() {
console.log("Fetching Categories")
  return function(dispatch){
    dispatch({type: 'LOADING_CATEGORIES'})
    return fetch('/categories.json')
      .then(res => res.json())
      .then(responseJson => dispatch({type: 'FETCH_CATEGORIES', payload: responseJson})
    )

  }
}



// export function fetchCategories() {
//   return dispatch => {
    // fetch('/categories').then(response => response.json())
    //   .then(categories => console.log(categories))
//
//   }
// }
