import React, { Component } from 'react';
import PostList from '../components/posts/postList'
import {fetchPosts, fetchCatPosts} from '../actions/posts-actions';
import {fetchCategories} from '../actions/category-actions';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import Categories from './categories'

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: null,
      status: 0,
    };
  }

  componentDidMount() {
    console.log('POST in component did mount')
    this.props.fetchPosts();
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update:", nextProps, nextState)
    if (nextState.status === 1) {
      return false;
    }
    return true;
  };

  componentWillUnmount() {
    this.props.fetchPosts()
  };

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

} // End of Class

const mapStateToProps = (state) => {
  console.log('in map state to props')
  return{
    posts: state.posts
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
