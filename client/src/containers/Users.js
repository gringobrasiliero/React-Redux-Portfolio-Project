import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {guestLogin} from '../actions/user-actions';
import GuestSignin from '../components/users/GuestSignin'
import Login from '../components/users/Login'
import SignUp from '../components/users/SignUp'

import { Route, Switch } from 'react-router-dom';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guestName: "",

    };
  }

  handleChange =(e) => {
      this.setState({[e.target.name]: e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let form = document.getElementById("guestForm")
    this.props.guestLogin({guestName: this.state.guestName});
    form.innerHTML = `Welcome, ${this.state.guestName}`
  }

  componentDidMount() {

  }

  render() {
    return(
      <React.Fragment>
      <Switch>


      <Route exact path="/login" render={(props) => {
        return (
          <Login  onChange={this.handleChange} onSubmit={this.handleSubmit} />
        )
      }}/>

      <Route exact path="/signup" render={(props) => {
        return (
          <SignUp  onChange={this.handleChange} onSubmit={this.handleSubmit} />
        )
      }}/>

      <Route exact path="/" render={(props) => {
        return (
          <GuestSignin  onChange={this.handleChange} onSubmit={this.handleSubmit} />
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
    guestLogin: bindActionCreators(guestLogin, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
