import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from '../posts/postList';
import Posts from '../posts/postComponent';
import Category from './category'
import { connect } from 'react-redux';


// let catList = this.props.categories.map( category => <li key={category.id}>{category.category}</li>)


let CategoriesList = (props, index) => {

 return props.categories.map((category) => {
    return (

  <li><Link key={index} onClick={this.handleClick} to={`/categories/${category.id}`} >{category.category}</Link></li>

)
})
}






export default CategoriesList;
