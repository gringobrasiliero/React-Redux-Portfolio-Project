
import React from 'react';

const LoginForm = (props) => (
  <div>
     <h2>Login</h2>
     <form>
      <input id='email' placeholder='email'/>
      <input id='password' placeholder='password'/>
      <button>Submit</button>
     </form>
     <button onClick={()=>this.props.changePage('signup')}>Sign   Up!</button>
    </div>
)

export default LoginForm;
