import React from 'react';
import Category from './category'
import { Link } from 'react-router-dom';
import CategoriesShow from './categoriesShow'
import { Route, Switch } from 'react-router-dom';


const CategoriesList = ({categories, onHandleClick}) => (
  <div id="nav-bar">
  <ul>
  <li><Link to={'/posts'}>All</Link></li>

 { categories.map(category => <Category handleClick={onHandleClick} key={category.id} id={category.id} id={category.id} category={category.category} />) }
  </ul>

   </div>
  )


export default CategoriesList;



// <form onSubmit={onHandleClick}>
//   <select onChange={onHandleChange} value={this.value}>
//     <option value="0" >All</option>
//     {categories.map(category =>
//       <option key={category.id} id={category.category} value={category.id}>{category.category}</option>
//     )}
//   </select>
//   <input type="submit" value="Submit" />
//   </form>
