export const FETCH_POSTS = 'FETCH_POSTS';



export const fetchPosts = () => {
  return (dispatch) => {
alert("HI!");
    console.log(fetch('categories/1/posts'))
    fetch('categories/1/posts')
      .then(res => res.json())
      .then(posts => {
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      })
  }
}
