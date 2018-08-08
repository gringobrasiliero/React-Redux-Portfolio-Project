
import React from 'react';

const Signup = (props) => (
  <div>
     <h2>Login</h2>
     <form>
         <input onChange={text => this.setState({ username: text })} id='username' placeholder='Username'/>
      <input onChange={text => this.setState({ email: text })} id='email' placeholder='Email'/>
      <input onChange={text => this.setState({ password: text })} id='password' placeholder='Password'/>
      <submit onClick={this.handleSignupSubmit} />
     </form>

    </div>
)



export default Signup;
