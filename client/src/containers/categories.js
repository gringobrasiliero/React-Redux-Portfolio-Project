import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from '../components/posts/postList';
import Posts from '../components/posts/postComponent';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories/categoriesList'
import {fetchCategories} from '../actions/categoryActions';





class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.onFetchCategories = this.onFetchCategories.bind(this)
    this.onLoadCategories = this.onLoadCategories.bind(this)

    this.state = {
      categories: []
    };
    // this.handleClick = this.handleClick.bind(this);


  }


onFetchCategories() {
  this.props.onFetchCategories();
}

onLoadCategories() {
  this.props.onLoadCategories();
}
  // fetchCategories = () => {
  //   fetch('/categories')
  //     .then(response => response.json())
  //     .then(categories => this.setState({categories}))
  //
  // }

  fetchCatPosts = (e) => {
    e.preventDefault()
    fetch(`categories/${this.id}/posts`)
      .then(response => response.json())
      .then(posts => this.setState({posts}));

  }


  // handleClick(event) {
  //     event.preventDefault();
  //     this.fetchCatPosts();
  //     alert(event.target.getAttribute('id'));
  // }



  componentDidMount() {
    this.props.onFetchCategories();


  }







render() {
  return(
    <div>
<CategoriesList categories={this.props.categories} />
</div>
  )
}


}




const mapStateToProps = state => ({
  categories: state.categories,
  users: state.users,
  votes: state.votes,
})

const mapActionsToProps = {
  onFetchCategories: fetchCategories,
};








export default connect(mapStateToProps, mapActionsToProps)(CategoriesContainer);
