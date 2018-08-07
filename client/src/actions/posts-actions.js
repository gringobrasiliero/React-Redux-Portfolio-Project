export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATPOSTS = 'FETCH_CATPOSTS';
export const NEW_POST = 'NEW_POST';


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

export const fetchCatPosts = () => {
  return (dispatch) => {
    fetch(`/categories/:id/posts`)
      .then(res => res.json())
      .then(posts => {
        dispatch({
          type: FETCH_CATPOSTS,
          payload: posts
        })
      })
  }
}


export const newPost = (url = "/posts", data = {}) => {
  return (dispatch) => {
    fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(res => res.json())
  .then(post => {
    dispatch({
      type: NEW_POST,
      payload: post
    }

        )
      })
}
}
