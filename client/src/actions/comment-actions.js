export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const NEW_COMMENT = 'NEW_COMMENT';


export const fetchComments = (url = "") => {
  return (dispatch) => {

    console.log(fetch(url))
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




export const newComment = (url = "/posts", data = {}) => {
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
  .then(comments => {
    dispatch({
      type: NEW_COMMENT,
      payload: comments
    }

        )
      })
}
}
