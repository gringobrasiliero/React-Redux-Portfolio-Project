import React from 'react';
import { connect } from 'react-redux';
import CommentForm from '../comments/CommentForm'
import Comments from '../../containers/comments'
const PostsShow = ({post, comment})=>

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
    <Comments comment={comment} />
  </div>
  </div>;


const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find(post => post.id === ownProps.match.params.postId);
  const comment = state.comments.find(comment => comment.post_id === ownProps.match.params.postId);
console.log(comment);
  if (post && comment) {
    return { post, comment }
  } else if (post) {
    return { post, comment: {} }
  } else {
    return{ post: {}, comment: {}}
  }
};

export default connect(mapStateToProps)(PostsShow);
