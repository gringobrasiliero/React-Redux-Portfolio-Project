import React from 'react';
import { connect } from 'react-redux';
import PostList from '../posts/postList'


const CategoriesShow = ({category, post})=> {
  return post ? (
    <div className="col-md-8">
      <h1>{category.category}</h1>
      <PostList posts={post} />
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const catId = ownProps.match.params.postId;
  const category = state.categories.find(category => category.id.toString() === ownProps.match.params.catId);
  const post = state.posts.filter(post => post.category_id.toString() === ownProps.match.params.catId);
  if (post && category) {
    return { post, category, catId }
  }else {
    return{ category: {},
            post: [],
          }
  }
};

export default connect(mapStateToProps)(CategoriesShow);