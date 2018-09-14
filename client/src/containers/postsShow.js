import React from 'react';
import { connect } from 'react-redux';
import Comments from './Comments'

const PostsShow = ({post, comments})=> {
return comments ? (
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
  </div>) : ( <div>Loading...</div>)
}
const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find(post => post.id.toString() === ownProps.match.params.postId);
  const comments = state.comments;

  if (post && comments) {
    return { post, comments}
  }else {
    return{ post: {} }
  }
};

export default connect(mapStateToProps)(PostsShow);
