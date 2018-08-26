import React from 'react';
import { connect } from 'react-redux';
import PostList from '../posts/postList'
import CategoriesList from '../categories/categoriesList'


const PostsIndex = ({categories, posts})=> {
  return posts ? (
    <div>
      <ul id="nav-bar">
      <CategoriesList categories={categories} />
      <h1>All</h1>
      </ul>
      <PostList posts={posts} />
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const categories = state.categories;
  const posts = state.posts;
  if (categories && posts) {
    return { posts, categories}
  }else {
    return{ categories: {},
  }
};
}
export default connect(mapStateToProps)(PostsIndex);
