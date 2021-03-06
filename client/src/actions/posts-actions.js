export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATPOSTS = 'FETCH_CATPOSTS';
export const NEW_POST = 'NEW_POST';
export const DELETE_OLD_POST = 'DELETE_OLD_POST';

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

export const fetchCatPosts = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
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
      },
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(res => res.json())
      .then(posts => {
        dispatch({
          type: NEW_POST,
          payload: posts
        })
      })
  }
}


export const deleteOldPost = (url, data = {}) => {
  return (dispatch) => {
    fetch(url, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(res => res.json())
      .then(posts => {
        dispatch({
          type: DELETE_OLD_POST,
          payload: posts
        })
      })
  }
  }
