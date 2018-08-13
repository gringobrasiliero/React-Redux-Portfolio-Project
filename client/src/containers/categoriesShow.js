import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/posts/postList'

const CategoriesShow = ({category, posts})=>

  <div className="col-md-8">

    <h2>{category.category}</h2>


<h1>Cat Show </h1>
  </div>;


const mapStateToProps = (state, ownProps) => {
  const category = state.categories.find(category => category.id == ownProps.match.params.categoryId);
  const posts = state.posts.find(post => post.category_id == ownProps.match.params.categoryId);

  if (category) {
    return { category }
  } else {
    return { category: {} }
  }
  // if (posts) {
  //   return { posts }
  // } else {
  //   return { posts: {} }
  // }
};

export default connect(mapStateToProps)(CategoriesShow);
