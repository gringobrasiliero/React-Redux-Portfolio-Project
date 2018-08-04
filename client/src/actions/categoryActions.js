export const FETCH_CATEGORIES = 'categories:fetchCategories';

export function fetchCategories() {
console.log("Fetching Categories")
  return function(dispatch){
    dispatch({type: 'LOADING_CATEGORIES'})
    return   fetch('/categories').then(response => response.json())
        .then(categories => dispatch({type: 'FETCH_CATEGORIES', payload: categories}))

  }
}



// export function fetchCategories() {
// console.log("Fetching Categories")
//   return function(dispatch){
//     dispatch({type: 'LOADING_CATEGORIES'})
//     return fetch('/categories')
//       .then(res => {
// console.log(res.json());
//       return res.json()
//       }).then(responseJson => {
//         console.log(responseJson);
//         dispatch({type: 'FETCH_CATEGORIES', payload: responseJson.categories})
//     })
//
//   }
// }



// export function fetchCategories() {
//   return dispatch => {
    // fetch('/categories').then(response => response.json())
    //   .then(categories => console.log(categories))
//
//   }
// }
