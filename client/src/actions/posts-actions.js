export const FETCH_POSTS = 'posts:fetchPosts';



export const fetchPosts = () => {
  return (dispatch) => {
    fetch(`/categories/${e.target.getAttribute('id')}/posts`)
      .then(res => res.json())
      .then(posts => {
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      })
  }
}
