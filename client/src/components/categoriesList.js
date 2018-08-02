import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from './posts';
import Posts from './posts';
import Category from './category'
import { connect } from 'react-redux';




const CategoriesList = (props) => {
function listCategories() {
  debugger
  return props.categories.map(category => {
    return (
  <li><Link key={category.id} to={`/categories/${category.id}`} onClick={this.handleClick}>{category.category}</Link></li>
)
})
}
return (
    <div>

      {listCategories()}
    </div>
  )
}

export default CategoriesList











// export default class CategoriesList extends Component {
//   render(){
//     const renderCategories = props.categories.map((category, index) => {
//     return <li><Link key={index} id={category.id} to={`/categories/${category.id}/posts`} onClick={this.handleClick} >{category.category}</Link></li>
//   })
// return (
//
// <div id="nav-bar">
//  <ul id="catPosts">
//       {renderCategories}
//        </ul>
//     </div>
//   )
// }
// }
