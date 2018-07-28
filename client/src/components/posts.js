import React, { Component } from 'react';
import Vote from './votes';
import SearchablePostsContainer from './searchablePostsContainer';


const Post = ({ id, title, description, url, publishedAt, urlToImage}) => (
  <div className="post" key={id} id="posts-list">
<section>

          <h2> {id}</h2>
        <h2> {title}</h2>
        <h2> {description}</h2>
        <h2> {url}</h2>
                <h2> {publishedAt}</h2>
<Vote />
        <img src="{postss.urlToImage}" />
</section>
      </div>
)

const PostList = ({ posts }) => (
  <div className="post-list">
{ posts.map(post => <Post id={post.id} title={post.title} description={post.description} url={post.url} publishedAt={post.publishedAt} urlToImage={post.urlToImage} />) }
  </div>
)



export default class Posts extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  fetchPosts = () => {
    fetch('/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts}));
  }

    componentDidMount() {
      this.fetchPosts()
    }

  render() {
    return <PostList posts={this.state.posts} />
  }

  }
