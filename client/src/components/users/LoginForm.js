<<<<<<< master
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
=======
import React, { Component } from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''

    };
  }

  handleSignIn(e) {
    e.preventDefault();
     this.props.store.dispatch({
       type: 'SIGNIN',
       user: {
         username: this.state.username,
         email: this.state.email,
         password: this.state.password,

       }
     })

     this.setState({
           username: '',
           email: '',
           password: '',
           })
       }


  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="username" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Login" />
      </form>
    )
  }

}
>>>>>>> Organized all files
