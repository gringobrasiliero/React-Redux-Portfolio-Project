import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from '../posts/postList';
import Posts from '../posts/postComponent';
import Category from './category'
import { connect } from 'react-redux';


// let catList = this.props.categories.map( category => <li key={category.id}>{category.category}</li>)


let CategoriesList = (props) => {

 return props.categories.map((category) => {
    return (

  <li key={category.id}><Link  id="catPosts" onClick={this.handleClick} to={`/categories/${category.id}`} >{category.category}</Link></li>

)
})
}

//
// const CategoriesList = ({categories}) => {
//   const renderCategories = categories.map(category =>
//   <li><Link key={category.id} id={category.id} to={`/categories/${category.id}/posts`} onClick={this.handleClick} >{category.category}</Link></li>
// );
//
// return (
//
// <div id="nav-bar">
//  <ul id="catPosts" >
//       {renderCategories}
//        </ul>
//     </div>
//   );
// };





export default CategoriesList;
