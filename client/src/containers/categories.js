import React, { Component } from 'react';

import { connect } from 'react-redux';
import CategoriesList from '../components/categories/categoriesList'
import {fetchCategories, fetchCatPosts} from '../actions/category-actions';
import {fetchPosts} from '../actions/posts-actions';

import {bindActionCreators} from 'redux'
import { Route, Switch } from 'react-router-dom';

class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      catId: "",
    };
    setTimeout(() => {
      this.setState({
        status: 0
      });
    },3000);
  }

  handleChange = (e) => {
    this.setState({catId: e.target.value});
  }



  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      status: 0,
      posts: [],

    });
    if (this.state.catId == 0) {
      this.props.fetchPosts();
    }else{
      alert("Cat hiiiiiiiiiiiiiiiiiii");
      alert(`${this.state.catId}`)
      this.props.fetchCatPosts(`/categories/${this.state.catId}/posts`);
};
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
    const { match, categories } = this.props;

    return(
      <div>
        <CategoriesList categories={this.props.categories} onHandleChange={this.handleChange} onHandleClick={this.handleClick}  />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('in map state to props')
  return{
    categories: state.categories,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  console.log("Mapped dispatch to props")
  return {
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
    fetchCatPosts: bindActionCreators(fetchCatPosts, dispatch),
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
