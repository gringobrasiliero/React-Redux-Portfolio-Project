
import React from 'react';

const SignupForm = (props) => (
  <div>
     <h2>Login</h2>
     <form  onSubmit={this.handleSignupSubmit}>
     <label>Username</label>
        <input type="text" onChange={(e) => this.handleUsernameChange(e)}/>
    <label>Email</label>
      <input type="text" onChange={(e) => this.handleEmailChange(e)}/>
    <label>Password</label>
      <input type="text" onChange={(e) => this.handlePasswordChange(e)}/>

      <submit />
     </form>

    </div>
)



export default SignupForm;
