export const FETCH_POSTS = 'FETCH_POSTS';



export const fetchPosts = () => {
  return (dispatch) => {

    console.log(fetch('/posts'))
    fetch('/posts')
      .then(res => res.json())
      .then(posts => {
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      })
  }
}
