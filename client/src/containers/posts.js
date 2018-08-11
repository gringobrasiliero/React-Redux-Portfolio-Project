import React, { Component } from 'react';
// import Vote from '../components/votes';
// import Post from '../components/posts/postComponent'
import PostList from '../components/posts/postList'
// import CategoriesList from '../components/categories/categoriesList'
// import ReactDOM from 'react-dom';
// import Category from './categories'
import {fetchPosts, fetchCatPosts} from '../actions/posts-actions';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import CategoriesContainer from './categories'



class PostsContainer extends Component {
  constructor(props) {
    super(props);
  this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      currentFilter: null,
      status: 0,
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    },3000);
  }


  handleOnChange(event) {
      event.preventDefault();
      alert("hiiiiiiiiiiiiiiiiiii");
      this.setState({status: 0})
      this.props.fetchCatPosts();

      fetch(`categories/${event.target.id}/posts`)
        .then(response => response.json())
        .then(posts => this.setState({posts}));

  }




  componentDidMount() {
    console.log('POST in component did mount')
    this.props.fetchPosts();


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

    };




  render() {
    return(

<div className='searchable-articles'>

<ul id="nav-bar">
<CategoriesContainer />
</ul>


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
      fetchCatPosts: bindActionCreators(fetchCatPosts, dispatch)

    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
