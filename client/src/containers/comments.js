import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from '../components/comments/commentsList'
import {bindActionCreators} from 'redux'
import {fetchComments, newComment} from '../actions/comment-actions';
import { Route, Switch } from 'react-router-dom';
import CommentForm from '../components/comments/CommentForm'
var arraySort = require('array-sort');

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
      let date = new Date();
      this.props.newComment('/comments', {comment: this.state.comment, post_id: this.props.post_id, created_at: date });

  }

  componentDidMount() {
    this.props.fetchComments(`/posts/${this.props.post_id}/comments`);
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.comments !== nextProps.comments) {
      return true;
    }
    console.log("COMMENTS no update")
    return false;
  }



  render() {
    return(
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
    )
  }

  componentWillUnmount() {
    console.log("UNMOUNTING")

  }

} // End of class

const mapStateToProps = (state) => {
  console.log('in map state to props')
console.log(state.comments)
  return{
    comments: arraySort(state.comments, 'created_at', {reverse: true} )



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
