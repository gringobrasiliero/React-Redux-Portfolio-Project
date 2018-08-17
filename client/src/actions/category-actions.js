
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATPOSTS = 'FETCH_CATPOSTS';
export const NEW_CATEGORY = 'NEW_CATEGORY';

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

export const fetchCatPosts = (url = "") => {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(posts => {
        dispatch({
          type: FETCH_CATPOSTS,
          payload: posts
        })
      })
  }
}

export const newCategory = (url = "/categories", data = {}) => {
  return (dispatch) => {
    fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
  .then(res => res.json())
    .then(category => {
      dispatch({
        type: NEW_CATEGORY,
        payload: category,

      })
    })
  }
}
