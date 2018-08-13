
import React from 'react';

const Signup = (props) => (
  <div>
     <h2>Login</h2>
     <form  onSubmit={this.handleSignupSubmit}>
     <label>Username</label>
        <input type="text" onChange={(event) => this.handleUsernameChange(event)}/>
    <label>Email</label>
      <input type="text" onChange={(event) => this.handleEmailChange(event)}/>
    <label>Password</label>
      <input type="text" onChange={(event) => this.handlePasswordChange(event)}/>


      <submit />
     </form>

    </div>
)



export default Signup;
