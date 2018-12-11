import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {guestLogin} from '../actions/user-actions';
import GuestSignin from '../components/users/GuestSignin'
import { Route, Switch } from 'react-router-dom';

class GuestUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guestName: ""
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

      <Route exact path="/" render={(props) => {
        if(this.props.users.length === 0){
          return (
            <GuestSignin  onChange={this.handleChange} onSubmit={this.handleSubmit} />
          )
        }else{
          return null
        }
      }}/>
      </Switch>
      </React.Fragment>
    )
  }

} // End of class

GuestUsers.defaultProps = {
  guestName: ""
}

GuestUsers.propTypes = {
  guestName: PropTypes.string
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

export default connect(mapStateToProps, mapDispatchToProps)(GuestUsers);
