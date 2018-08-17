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


render() {
  return(
    <div>
      <CategoriesList categories={this.state.categories} />
    </div>
  )
}


}
