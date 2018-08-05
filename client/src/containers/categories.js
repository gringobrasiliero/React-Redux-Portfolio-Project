import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from '../components/posts/postList';
import Posts from '../components/posts/postComponent';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories/categoriesList'
import {fetchCategories} from '../actions/categoryActions';

import {bindActionCreators} from 'redux'




class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 0,


    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    },3000);
  }

  fetchCatPosts = (e) => {
    e.preventDefault()
    fetch(`categories/${this.id}/posts`)
      .then(response => response.json())
      .then(posts => this.setState({posts}));
  }



  componentDidMount() {
    console.log('in component did mount')
    this.props.fetchCategories();

  }

  componentWillReceiveProps(nextProps) {
    console.log("Component will recieve props", nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update:", nextProps, nextState)
    if (nextState.status === 1) {
      return false;
    }
    return true;
    }


componentWillUpdate(nextProps, nextState) {
    console.log("Component Will Update:", nextProps, nextState)
}

componentDidUpdate(prevProps, prevState) {
  console.log("Component Did Update:", prevProps, prevState)

}

componentWillUnmount() {
  console.log("Component will unmount")
}

   render() {
     return(
       <div>
          <ul id="nav-bar">
          <CategoriesList categories={this.props.categories} />
          </ul>
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
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
