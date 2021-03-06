import React from 'react';
import PostList from '../components/posts/postList'
import CategoriesList from '../components/categories/categoriesList'


const PostsIndex = ({categories, posts, onClick, handleClick})=> {
  return posts ? (
    <div>
      <ul id="nav-bar">
      <CategoriesList categories={categories} />
      <h1>All</h1>
      <h2 id="sortBy">Sort By:
              <button id="likes" onClick={handleClick}>Most Popular</button>
              <button id="least popular" onClick={handleClick}>Least Popular</button>
              <button id="created_at" onClick={handleClick}>Most Recent</button>
            </h2>

      </ul>
      <PostList posts={posts} onHandleClick={onClick} />
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default PostsIndex;
