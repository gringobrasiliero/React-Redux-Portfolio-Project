import React from 'react'

const Login = ({onChange, onSubmit}) => (
<form id="LoginForm" onSubmit={onSubmit}>

  <label>Username:
    <input type="text" id="userName" name="userName" onChange={onChange} />
  </label>
<br/>
  <label>Password:
    <input type="password" id="password" name="password" onChange={onChange} />
  </label>

  <input type="submit" value="Login" />
</form>


)

export default Login
