export const GUEST_LOGIN = 'GUEST_LOGIN';

export const guestLogin = (guestName) => {
  return (dispatch) => {
    dispatch({
      type: GUEST_LOGIN,
      payload: guestName
    })
  }
}
