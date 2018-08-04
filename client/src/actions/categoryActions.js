<<<<<<< master

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATPOSTS = 'FETCH_CATPOSTS';



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

export const fetchCatPosts = () => {
  return (dispatch) => {
    fetch(`/categories/:id/posts`)
      .then(res => res.json())
      .then(catPosts => {
        dispatch({
          type: FETCH_CATPOSTS,
          payload: catPosts
        })
      })
=======
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
