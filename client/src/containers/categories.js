import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from '../components/posts/postList';
import Posts from '../components/posts/postComponent';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories/categoriesList'
import {fetchCategories} from '../actions/categoryActions';
import {bindActionCreators} from 'redux'




class CategoriesContainer extends Component {


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

   render() {
     return(
       <div>
          <CategoriesList categories={this.props.categories} />
       </div>
     )
   }

}


const mapStateToProps = (state) => {
  console.log('in map state to props')
  return{
    categories: state.categories,
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
