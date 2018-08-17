import React from 'react'
// import Vote from '../votes';
import Post from './postComponent'

const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post =>
       <Post
          id={post.id}
          key={post.id}
          category_id={post.category_id}
          title={post.title}
          description={post.description}
          url={post.url}
          publishedAt={post.publishedAt}
          urlToImage={post.urlToImage}
      />
    )}
  </div>
)

export default PostList
