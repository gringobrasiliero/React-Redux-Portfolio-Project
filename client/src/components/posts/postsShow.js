import React from 'react';
import { connect } from 'react-redux';
import PostList from './postList'
import Post from './postComponent'
import CommentForm from '../comments/CommentForm'
import { Link } from 'react-router-dom';

const PostsShow = ({post})=>

  <div className="col-md-8">

  <div className="post" key={post.id}>
    <img src={post.urlToImage} alt="" />
    <section>

    <div className="content">
      <h2> <a href={post.url} target="_blank">{post.title}</a></h2>
      <p> {post.description}</p>

    </div>


    </section>
    <br />
    <br />
    <CommentForm />
  </div>
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
