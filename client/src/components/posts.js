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
  <div>
        <li key={postss.id}> {postss.post}</li>
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
