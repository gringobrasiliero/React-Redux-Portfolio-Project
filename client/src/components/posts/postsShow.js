import React from 'react';
import { connect } from 'react-redux';
import Comments from '../../containers/comments'

const PostsShow = ({post, comments})=>

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

      <Comments post_id={post.id} />
    </div>

  </div>


const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = state.posts.find(post => post.id == ownProps.match.params.postId);
  const comments = state.comments.filter(comment => comment.post_id == ownProps.match.params.postId);

  if (post && comments) {
    return { post, comments, postId }
  }else {
    return{ post: {} }
  }
};

export default connect(mapStateToProps)(PostsShow);
