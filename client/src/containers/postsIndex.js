import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/posts/PostList'
import CategoriesList from '../components/categories/CategoriesList'


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
}
}
export default connect(mapStateToProps)(PostsIndex);
