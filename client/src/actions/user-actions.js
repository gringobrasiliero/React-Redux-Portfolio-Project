export const GUEST_LOGIN = 'GUEST_LOGIN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const guestLogin = (guestName) => {
  return (dispatch) => {
    dispatch({
      type: GUEST_LOGIN,
      payload: guestName
    })
  }
}


export const signUp = (data = {}) => {
  return (dispatch) => {
    fetch("/users", {
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

export const signIn = (data = {}) => {
  return (dispatch) => {
    fetch("/login", {
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
          type: SIGN_IN,
          payload: users
        })
      })
  }
}
