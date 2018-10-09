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
    let form = document.getElementById("guestForm")
    form.innerHTML = ""
    this.props.guestLogin({guestName: this.state.guestName});
  }

  componentDidMount() {

  }

  render() {
    return(
      <React.Fragment>
      <form id="guestForm" onSubmit={this.handleSubmit}>
        <label>Guest Sign in: </label>
          <input type="text" id="guest" name="guestName" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
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
