import React, { Component } from 'react';
import Vote from './votes';
import Post from './postComponent'
import PostList from './postList'
import CategoriesList from './categories'
import ReactDOM from 'react-dom';
import Category from './categories'


export default class PostsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
    this.handleClick = this.handleClick.bind(this);
  }



componentWillMount() {
    // add event listener for clicks
  document.getElementById("catPosts").onclick = this.handleClick
  };

  componentWillUnmount() {
      // add event listener for clicks
  document.getElementById("catPosts").onclick = this.handleClick
    };

handleClick = (e) => {
    e.preventDefault();
    fetch(`/categories/${e.target.getAttribute('id')}/posts`)
      .then(response => response.json())
      .then(posts => this.setState({posts}));
}

    componentDidMount() {
      // this.fetchPosts()
this.handleClick
}

  render() {
    return(

<div className='searchable-articles'>
       <PostList posts={this.state.posts} />
       </div>
     )
  }

  }
