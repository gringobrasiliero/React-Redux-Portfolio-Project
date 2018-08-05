import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from '../posts/postList';
import Posts from '../posts/postComponent';
import Category from './category'
import { connect } from 'react-redux';


// let catList = this.props.categories.map( category => <li key={category.id}>{category.category}</li>)


const CategoriesList = (props) => {

 return props.categories.map((category) => {
    return (

  <li key={category.id}><Link  id="catPosts" onClick={this.handleClick} to={`/categories/${category.id}`} >{category.category}</Link></li>

)
})
}





export default CategoriesList;
