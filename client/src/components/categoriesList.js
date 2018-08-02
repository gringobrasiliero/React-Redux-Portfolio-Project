import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from './posts';
import Posts from './posts';
import Category from './category'
import { connect } from 'react-redux';



const CategoriesList = ({categories}) => (
  <div id="nav-bar">
  <ul id="catPosts">
 { categories.map(category => <Category id={category.id}  category={category.category} key={category.id} onClick={this.handleClick} />) }
  </ul>
   </div>
  )

const mapStateToProps = (state) => {
  return {categories: state.categories}
}


export default CategoriesList;
