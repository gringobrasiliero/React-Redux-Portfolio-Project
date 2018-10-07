export const GUEST_LOGIN = 'GUEST_LOGIN';
const mapsApiKey = process.env.REACT_APP_KEY;

export const guestLogin = (guestName) => {
  return (dispatch) => {
    dispatch({
      type: GUEST_LOGIN,
      payload: guestName
    })
  }
}
