export const SIGN_UP = 'SIGN_UP';


    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)


    export const signup = (url = "/users/sign_up", data = {}) => {

      return (dispatch) => {
        fetch(url, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json; charset=utf-8',

              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(res => res.json())
      .then(user => {
        dispatch({
          type: SIGN_UP,
          payload: user
        }

            )
          })
    }
    }
