export const FETCH_POSTS = 'FETCH_POSTS';



export const fetchPosts = () => {
  return (dispatch) => {
<<<<<<< master
    console.log(fetch('/posts'))
    fetch('/posts')
=======
    fetch(`/categories/${e.target.getAttribute('id')}/posts`)
>>>>>>> Component will update.
      .then(res => res.json())
      .then(posts => {
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      })
  }
}
