import React, { Component } from 'react';
import Vote from './votes';
import Post from './postComponent'
import PostList from './postList'



export default class PostsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
    this.handleClick = this.handleClick.bind();
  }



  fetchPosts = () => {
    fetch('/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts}));
  }

//
// fetchCatPosts = () => {
  // fetch(`categories/${id}/posts`)
  //   .then(response => response.json())
  //   .then(posts => this.setState({posts}));
// }


handleClick(event) {

    event.preventDefault();
    alert("hiiiiiiiiiiiiiiiiiii");
    fetch(`categories/${event.target.id}/posts`)
      .then(response => response.json())
      .then(posts => this.setState({posts}));

}



componentWillMount() {
    // add event listener for clicks
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
      // add event listener for clicks
      document.removeEventListener('click', this.handleClick, false);
    }



    componentDidMount() {
      this.fetchPosts()
    }

  render() {
    return(

<div className='searchable-articles'>
       <PostList posts={this.state.posts} />
       </div>
     )
  }

  }
