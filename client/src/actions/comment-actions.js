export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const NEW_COMMENT = 'NEW_COMMENT';

export const fetchComments = (url = "") => {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
        .then(comments => {
          dispatch({
            type: FETCH_COMMENTS,
            payload: comments
          })
        })
  }
}

export const newComment = (data = {}) => {
  return (dispatch) => {
    fetch("/comments", {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow", // follows the redirect response
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(res => res.json())
      .then(comment => {
        dispatch({
          type: NEW_COMMENT,
          payload: comment
        })
      })
  }
}
