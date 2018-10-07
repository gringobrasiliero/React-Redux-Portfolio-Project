import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CommentList from '../components/comments/commentsList';
import CommentForm from '../components/comments/CommentForm';
import {guestLogin} from '../actions/user-actions';


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
    this.props.guestLogin({guestName: this.state.guestName});
  }

  componentDidMount() {

  }

  render() {
    return(
      <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <label>Sign in as Guest: </label>
          <input type="text" id="guest" name="guestName" onChange={this.handleChange} />
        <input type="submit" value="Sign in" />
      </form>
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
  console.log('in map state to props')
  console.log(state.users)
  return{
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  console.log("Mapped dispatch to props")
  return {
    guestLogin: bindActionCreators(guestLogin, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
