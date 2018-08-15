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

    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    },3000);

  }

  handleSubmit = (e) => {
      e.preventDefault();
      alert("Comment hiiiiiiiiiiiiiiiiiii");
      this.props.newComment('/comments', {comment: e.target.children[0]});

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
     this.props.fetchComments();

   }

  render() {
    // const { match, categories } = this.props;

    return(

      <Switch>
      <Route exact path="/posts/:postId" render={() => {
        return <div>
        <CommentForm onHandleSubmit={this.handleSubmit} />
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
