import React, { Component } from 'react';
import Vote from '../components/votes';
import Post from '../components/posts/postComponent'
import PostList from '../components/posts/postList'
import CategoriesList from '../components/categories/categoriesList'
import ReactDOM from 'react-dom';
import Category from './categories'
import {fetchPosts} from '../actions/posts-actions';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';




class PostsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('in component did mount')
    this.props.fetchPosts();

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

}



  render() {
    return(

<div className='searchable-articles'>
       <PostList posts={this.state.posts} />
       </div>
     )
  }

  }

  const mapStateToProps = (state) => {
    console.log('in map state to props')
    return{
      categories: state.categories,
      posts: state.posts
    // users: state.users,
    // votes: state.votes,
    }
  }
  function mapDispatchToProps(dispatch) {
    console.log("Mapped dispatch to props")
    return {
      fetchPosts: bindActionCreators(fetchPosts, dispatch),
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
