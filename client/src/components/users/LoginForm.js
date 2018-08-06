
import React from 'react';

const LoginForm = (props) => (
  <form>
    <h3>Sign in</h3>
    <input type="text"  placeholder="enter you username" />
    <input type="password"  placeholder="enter password" />
    <input type="submit" value="Login" />
  </form>
)

export default LoginForm;
