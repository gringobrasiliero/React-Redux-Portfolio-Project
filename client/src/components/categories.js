import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from './posts';
import Posts from './posts';
import { connect } from 'react-redux';
import CategoriesList from './categoriesList'
import Category from './category'





export default class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);


  }

  // fetchCategories = () => {
  //   fetch('/categories')
  //     .then(response => response.json())
  //     .then(categories => this.setState({categories}))
  //
  // }
  //
  // fetchCatPosts = (e) => {
  //   e.preventDefault()
  //   fetch(`categories/${this.id}/posts`)
  //     .then(response => response.json())
  //     .then(posts => this.setState({posts}));
  //
  // }


  // handleClick(event) {
  //     event.preventDefault();
  //     this.fetchCatPosts();
  //     alert(event.target.getAttribute('id'));
  // }


  //
  // componentDidMount() {
  //   this.fetchCategories();
  //   document.addEventListener('click', this.handleClick, false);
  //
  //
  // }
  //
  // componentWillUnmount() {
  //     document.addEventListener('click', this.handleClick, true);
  //   }


render() {
  return(
    <div>
<CategoriesList categories={this.state.categories} />
</div>
  )
}


}
