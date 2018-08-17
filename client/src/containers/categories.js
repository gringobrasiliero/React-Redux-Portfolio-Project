import React, { Component } from 'react';

import { connect } from 'react-redux';
import CategoriesList from '../components/categories/categoriesList'
import {fetchCategories, fetchCatPosts} from '../actions/category-actions';
import {fetchPosts} from '../actions/posts-actions';

import {bindActionCreators} from 'redux'


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
    alert(e.target.value);
    this.setState({
      status: 0,
      posts: [],

    });
    if (this.state.catId == 0) {
      this.props.fetchPosts();
    }else{
      this.props.fetchCatPosts(`/categories/${this.state.catId}/posts`);
};
  }



  componentDidMount() {
    // this.props.fetchCategories();
   }


   shouldComponentUpdate(nextProps, nextState) {
     if (nextState.status === 0) {
       return false;
     }
     return true;
   }

   componentWillUnmount() {
     // this.props.fetchCategories();
   }

  render() {

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
