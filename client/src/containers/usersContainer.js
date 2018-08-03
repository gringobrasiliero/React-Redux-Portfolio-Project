import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from './components/users/LoginForm.js'




export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      email: null,

    };

    signIn(username, password) {
     // This is where you would call Firebase, an API etc...
     // calling setState will re-render the entire app (efficiently!)
     this.setState({
       user: {
         username,
         password,
       }
     })
   }

   signOut() {
     // clear out user from state
     this.setState({user: null})
   }

   render() {

     return (
       <div>
         <h1>My cool App</h1>
         {
           (this.state.user) ?
             <Welcome
              user={this.state.user}
              onSignOut={this.signOut.bind(this)}
             />
           :
             <LoginForm
              onSignIn={this.signIn.bind(this)}
             />
         }
       </div>
     )

   }

 }
