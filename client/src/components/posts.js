import React, { Component } from 'react';

export default class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchPosts()
  }
  fetchPosts = () => {
    fetch('/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts}));
  }

  renderPosts = () => {
    return this.state.posts.map(postss => {
      return(
  <div key={postss.id} id="posts-list">
        <h2> {postss.title}</h2>
        <h2> {postss.description}</h2>
        <h2> {postss.url}</h2>
                <h2> {postss.publishedAt}</h2>

        {postss.urlToImage}

      </div>
      )
    })
  }



  render() {
    return(
  <div id="posts">
  <ul>
  {this.renderPosts()}
  </ul>
  </div>
    )
  }


  }
