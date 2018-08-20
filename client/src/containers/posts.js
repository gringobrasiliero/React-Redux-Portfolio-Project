import React, { Component } from 'react';
import PostList from '../components/posts/postList'
import PostsShow from '../components/posts/postsShow'
import { Route, Switch } from 'react-router-dom';

import {fetchPosts, fetchCatPosts} from '../actions/posts-actions';
import {fetchCategories} from '../actions/category-actions';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import Categories from './categories'
var arraySort = require('array-sort');

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: null,
      status: 0,
    };
  }

  startInterval = () => {
    console.log("INTERVAL")
     this.interval = setInterval(this.props.fetchPosts, 10000);
   }

   cleanUpInterval = () => clearInterval(this.interval);


  componentDidMount() {
    console.log('POST in component did mount')
    this.startInterval()
    this.props.fetchPosts();
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.posts !== nextProps.props) {
      return true;
    }
    console.log("POSTS no update")
    return false;
  }

  render() {
    return(
      <div className='searchable-articles'>
        <ul id="nav-bar">
        <Categories />
        </ul>
        <PostList posts={this.props.posts} />

      </div>
    )
  }


componentWillUnmount() {
  this.cleanUpInterval()
}


} // End of Class

const mapStateToProps = (state) => {
  console.log('in map state to props')
  return{
    posts: arraySort(state.posts, 'created_at', {reverse: true} )
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("Mapped dispatch to props")
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    fetchCatPosts: bindActionCreators(fetchCatPosts, dispatch),
    fetchCategories: bindActionCreators(fetchCategories, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
