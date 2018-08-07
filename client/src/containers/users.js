import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../components/users/LoginForm.js'




export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      email: null,

    };
    this.handleSignIn = this.handleSignIn.bind(this);

  }








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
      }








   // signOut() {
   //   // clear out user from state
   //   this.setState({user: null})
   // }

   render() {

     return (
       <div>
         <h1>My cool App</h1>


       </div>
     )

   }

 }
