import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CommentList from '../components/comments/commentsList';
import CommentForm from '../components/comments/CommentForm';
import {fetchComments, newComment} from '../actions/comment-actions';

import arraySort from 'array-sort'

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      post_id: 0,
    };
  }

  handleChange =(e) => {
      this.setState({[e.target.name]: e.target.value})
  };

  handleIdChange =(e) => {
    this.setState({
      post_id: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let username;
    let guestLocation;

    if (this.props.users[0]){
      username = this.props.users[0].username || this.props.users[0].guestName
      if (this.props.locations[0]){
        guestLocation = `${this.props.locations[0][2].long_name}, ${this.props.locations[0][4].long_name}`
      }else{
        guestLocation = ""
      }
      let date = new Date();
      this.props.newComment({comment: this.state.comment,
                            post_id: this.props.post_id,
                            guestName: username,
                            guestLocation: guestLocation,
                            created_at: date });
    }else{
      alert("Sign in to leave a comment.")
    }
      }

  componentDidMount() {
    this.props.fetchComments(`/posts/${this.props.post_id}/comments`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.comments !== nextProps.comments) {
      return true;
    }
    return false;
  }

  render() {
    return(
      <React.Fragment>
        <Switch>
          <Route exact path="/posts/:postId" render={(post_id) => {
            return (
              <div>
                <CommentForm post_id={this.props.post_id} onHandleSubmit={this.handleSubmit} onHandleChange={this.handleChange} onHandleIdChange={this.handleIdChange} />
                <CommentList comments={this.props.comments} onHandleClick={this.handleClick} />
              </div>
            )
          }}/>
        </Switch>
      </React.Fragment>
    )
  }

} // End of class

Comments.defaultProps = {
  comment: "",
  id: 0
}



Comments.propTypes = {
  commment: PropTypes.string,
  id: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return{
    comments: arraySort(state.comments, 'created_at', {reverse: true} ),
    users: state.users,
    locations: state.locations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComments: bindActionCreators(fetchComments, dispatch),
    newComment: bindActionCreators(newComment, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
