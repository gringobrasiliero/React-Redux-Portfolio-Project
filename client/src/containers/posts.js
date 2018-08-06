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
  this.handleClick = this.handleClick.bind(this);
    this.state = {
      status: 0,


    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    },3000);
  }

  // document.getElementById("catPosts").onclick = this.handleClick



  componentDidMount() {
    console.log('POST in component did mount')
    this.props.fetchPosts();
    document.getElementById("catPosts").onclick = this.handleClick

    document.addEventListener('onClick', this.handleClick, false);

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update:", nextProps, nextState)
    if (nextState.status === 1) {
      return false;
    }
    return true;
    }



  componentWillUnmount() {
      // add event listener for clicks
      document.getElementById("catPosts").onclick = this.handleClick
        document.addEventListener('onClick', this.handleClick, false);
    };

    handleClick(event) {
        event.preventDefault();
        alert("hiiiiiiiiiiiiiiiiiii");
        fetch(`categories/${event.target.id}/posts`)
          .then(response => response.json())
          .then(posts => this.setState({posts}));

    }



  render() {
    return(

<div className='searchable-articles'>
       <PostList posts={this.props.posts} />
       </div>
     )
  }

  }

  const mapStateToProps = (state) => {
    console.log('in map state to props')
    return{
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
