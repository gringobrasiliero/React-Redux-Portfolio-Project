import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from '../posts/postList';
import Posts from '../posts/postComponent';
import Category from './category'
import { connect } from 'react-redux';




const CategoriesList = (props, index) => {
function listCategories() {
return props.categories.map((category) => {
    return (

      <div key={index}>
  <li><Link key={category.id} to={`/categories/${category.id}`} >{category.category}</Link></li>
  </div>
)
})
}
return (
    <div>

      {listCategories()}
    </div>
  )
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
