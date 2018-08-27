import React from 'react';
import Category from './Category'
import { Link } from 'react-router-dom';


const CategoriesList = ({categories, onHandleClick}) => (
  <div id="nav-bar">
    <ul>
      <li><Link to={'/posts'}>All</Link></li>
      { categories.map(category => <Category handleClick={onHandleClick}
                                             key={category.id}
                                             id={category.id}
                                             category={category.category}/>)}
    </ul>
   </div>
  )

export default CategoriesList;
