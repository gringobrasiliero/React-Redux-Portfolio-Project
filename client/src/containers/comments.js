import React, { Component } from 'react';

import { connect } from 'react-redux';
import CommentList from '../components/comments/commentsList'
import {bindActionCreators} from 'redux'
import {fetchComments, newComment} from '../actions/comment-actions';
import { Route, Switch } from 'react-router-dom';
import CommentForm from '../components/comments/CommentForm'


class Comments extends Component {
  constructor(props) {
    super(props);
      // this.handleClick = this.handleClick.bind(this);

    this.state = {
      comment: "",
      post_id: 0,
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    },3000);

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
      alert(this.state.comment)
      this.props.newComment('/comments', {comment: this.state.comment, post_id: this.props.post_id, created_at: new Date() });

  }

  componentDidMount() {
    console.log('in component did mount')
    this.props.fetchComments(`/posts/${this.props.post_id}/comments`);
    console.log(this.props.post_id)

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
     this.props.fetchComments();

   }

  render() {

    return(

      <Switch>
      <Route exact path="/posts/:postId" render={(post_id) => {
        return <div>
        <CommentForm post_id={this.props.post_id} onHandleSubmit={this.handleSubmit} onHandleChange={this.handleChange} onHandleIdChange={this.handleIdChange} />
          <CommentList comments={this.props.comments} onHandleClick={this.handleClick} />
        </div>
      }}
      />
      </Switch>


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
    newComment: bindActionCreators(newComment, dispatch),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
