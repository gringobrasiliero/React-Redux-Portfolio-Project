import React, { Component } from 'react';

import { connect } from 'react-redux';
import CommentList from '../components/comments/commentsList'
import {bindActionCreators} from 'redux'
import {fetchComments, newComment} from '../actions/comment-actions';


class Comments extends Component {
  constructor(props) {
    super(props);
      this.handleClick = this.handleClick.bind(this);

    this.state = {

    };


  }

  handleClick(event) {
      event.preventDefault();
      alert("Comment hiiiiiiiiiiiiiiiiiii");



  }

  componentDidMount() {
    console.log('in component did mount')
    this.props.fetchComments();

   }

   componentWillReceiveProps(nextProps) {
     console.log("Component will recieve props", nextProps)
   }

   shouldComponentUpdate(nextProps, nextState) {
     console.log("Should Component Update:", nextProps, nextState)
     if (nextState.status === 1) {
       return false;
     }
     return true;
   }

   componentWillUpdate(nextProps, nextState) {
     console.log("Component Will Update:", nextProps, nextState)
   }

   componentDidUpdate(prevProps, prevState) {
     console.log("Component Did Update:", prevProps, prevState)
   }

   componentWillUnmount() {
     console.log("Component will unmount")
   }

  render() {
    // const { match, categories } = this.props;

    return(
      <div>
      <CommentList comments={this.props.comments} onHandleClick={this.handleClick} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('in map state to props')
  return{
    comments: state.comments

  }
}

function mapDispatchToProps(dispatch) {
  console.log("Mapped dispatch to props")
  return {
    fetchComments: bindActionCreators(fetchComments, dispatch),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
