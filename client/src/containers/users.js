import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Login from '../components/users/Login.js';
import signup from '../components/users/Signup.js';

import {bindActionCreators} from 'redux'


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

  handleSignupSubmit(event) {
    event.preventDefault();
    alert("CLICKED")
      this.props.signup("/users/sign_up", {user: this.state});

}


componentDidMount() {
     console.log('in component did mount')
     this.props.signup();

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
          <h2>Sign Up</h2>
          <form>
              <input onChange={text => this.setState({ username: text })} id='username' placeholder='Username'/>
           <input onChange={text => this.setState({ email: text })} id='email' placeholder='Email'/>
           <input onChange={text => this.setState({ password: text })} id='password' placeholder='Password'/>
           <button onClick={this.handleSignupSubmit}>Submit</button>
          </form>

         </div>
     )

   }

 }


 const mapStateToProps = (state) => {
   console.log('in map state to props')
 return{
   users: state.categories,

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
