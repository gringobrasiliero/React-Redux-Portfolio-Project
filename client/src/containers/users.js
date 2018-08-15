import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Login from '../components/users/Login.js';
import signupForm from '../components/users/Signup.js';

import {bindActionCreators} from 'redux'
import {signup} from '../actions/user-actions'

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      email: '',
      password: ''
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);

  }


  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };



  handleSignupSubmit(e) {
console.log(this.state);
    e.preventDefault();
    alert("CLICKED")
      this.props.signup("/users", {user: {username: this.state.username, email: this.state.email, password: this.state.password}});

}


componentDidMount() {
     console.log('in component did mount')

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
          <h2>Login</h2>
          <form onSubmit={this.handleSignupSubmit}>
          <label>Username</label>
             <input type="text" onChange={(e) => this.handleUsernameChange(e)}/>
         <label>Email</label>
           <input type="text" onChange={(e) => this.handleEmailChange(e)}/>
         <label>Password</label>
           <input type="password" onChange={(e) => this.handlePasswordChange(e)}/>
           <input type="submit" value="Submit" />
          </form>


         </div>
     )

   }

 }


 const mapStateToProps = (state) => {
   console.log('in map state to props')
 return{
   users: state.users,

   // users: state.users,
   // votes: state.votes,
 }
 }

 function mapDispatchToProps(dispatch) {
 console.log("Mapped dispatch to props")
   return {
    signup: bindActionCreators(signup, dispatch),


   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(User);
