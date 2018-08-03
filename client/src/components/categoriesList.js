import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from './posts';
import Posts from './posts';
import Category from './category'
import { connect } from 'react-redux';




const CategoriesList = ({categories}) => {
  const renderCategories = categories.map(category =>
  <li><Link key={category.id} id={category.id} to={`/categories/${category.id}/posts`} onClick={this.handleClick} >{category.category}</Link></li>
);

return (

<div id="nav-bar">
 <ul id="catPosts">
      {renderCategories}
       </ul>
    </div>
  );
};


export default CategoriesList;