import React from 'react'

const GuestSignin = ({onChange, onSubmit}) => (
<form id="guestForm" onSubmit={onSubmit}>
  <label>Guest Sign in: </label>
    <input type="text" id="guest" name="guestName" onChange={onChange} />
  <input type="submit" value="Submit" />
</form>
)

export default GuestSignin
