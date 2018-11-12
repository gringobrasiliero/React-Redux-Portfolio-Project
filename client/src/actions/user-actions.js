export const GUEST_LOGIN = 'GUEST_LOGIN';
export const SIGN_UP = 'SIGN_UP';

export const guestLogin = (guestName) => {
  return (dispatch) => {
    dispatch({
      type: GUEST_LOGIN,
      payload: guestName
    })
  }
}


export const signUp = (url = "/users", data = {}) => {
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
      .then(users => {
        dispatch({
          type: SIGN_UP,
          payload: users
        })
      })
  }
}
