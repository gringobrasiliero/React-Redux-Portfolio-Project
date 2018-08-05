export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';




export const fetchCategories = () => {
  return (dispatch) => {
    fetch(`/categories`)
      .then(res => res.json())
      .then(categories => {
        dispatch({
          type: FETCH_CATEGORIES,
          payload: categories
        })
      })
  }
}










// export function fetchCategories() {
// console.log("Fetching Categories")
//   return function(dispatch){
//     dispatch({type: 'LOADING_CATEGORIES'})
//     return   fetch('/categories.json').then(response => response.json())
//         .then(categories => dispatch({type: 'FETCH_CATEGORIES', payload: categories}))
// debugger
//   }
// }


//
// export function fetchCategories() {
// console.log("Fetching Categories")
//   return function(dispatch){
//     dispatch({type: 'LOADING_CATEGORIES'})
//     return fetch('/categories')
//       .then(res => {
// console.log(res.json());
//       return res.json()
//       }).then(responseJson => {
//         dispatch({type: 'FETCH_CATEGORIES', payload: responseJson.categories})
//     })
//
//   }
// }
//


// export function fetchCategories() {
//   return dispatch => {
    // fetch('/categories').then(response => response.json())
    //   .then(categories => console.log(categories))
//
//   }
// }
