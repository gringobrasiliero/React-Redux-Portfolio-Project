
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
  }
}
