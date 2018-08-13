import React from 'react';
import { connect } from 'react-redux';
import PostList from './postList'

const PostsShow = ({post})=>

  <div className="col-md-8">

    <h2>{post.title}</h2>


<h1>Post Show </h1>
  </div>;


const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find(post => post.id == ownProps.match.params.postId);

  if (post) {
    return { post }
  } else {
    return { post: {} }
  }
};

export default connect(mapStateToProps)(PostsShow);
