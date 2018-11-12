import React from 'react'

const SignUp = ({onChange, onSubmit}) => (
<React.Fragment>
<h1>Sign Up</h1>
<form id="SignupForm" onSubmit={onSubmit}>

  <label>Username:
    <input type="text" id="userName" name="userName" onChange={onChange} />
  </label>
<br/>
  <label>Password:
    <input type="password" id="password" name="password" onChange={onChange} />
  </label>
<br/>
  <label>Confirm Password:
    <input type="password" id="password" name="password" onChange={onChange} />
  </label>

  <input type="submit" value="Sign up" />
</form>

</React.Fragment>
)

export default SignUp
