import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {guestLogin} from '../actions/user-actions';
import {signUp} from '../actions/user-actions';

import GuestSignin from '../components/users/GuestSignin'
import Login from '../components/users/Login'
import SignUp from '../components/users/SignUp'

import { Route, Switch } from 'react-router-dom';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""

    };
  }

  handleChange =(e) => {
      this.setState({[e.target.name]: e.target.value})
  };

  handleSignIn = (e) => {
    e.preventDefault();
    alert("Signing in")
  }

  handleSignUp = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword){
      this.props.signUp({username: this.state.username, password: this.state.password, email: this.state.email});
      this.props.history.push('/')
    }else{
      alert("Please confirm your password.")
    }

  }

  componentDidMount() {

  }

  render() {
    return(
      <React.Fragment>
        <Switch>


        <Route exact path="/login" render={(props) => {
          return (
            <Login  onChange={this.handleChange} onSubmit={this.handleSignIn} />
          )
        }}/>

        <Route exact path="/signup" render={(props) => {
          return (
            <SignUp  onChange={this.handleChange} onSubmit={this.handleSignUp} />
          )
        }}/>

        </Switch>
      </React.Fragment>
    )
  }

} // End of class

Users.defaultProps = {
  guestName: "",
}

Users.propTypes = {
  guestName: PropTypes.string,
}

const mapStateToProps = (state) => {
  return{
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: bindActionCreators(signUp, dispatch),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
