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
