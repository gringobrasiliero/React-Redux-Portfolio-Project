import React from 'react';
import { Link } from 'react-router-dom';


// let catList = this.props.categories.map( category => <li key={category.id}>{category.category}</li>)


const CategoriesList = (props) => {

 return props.categories.map((category) => {
    return (

  <li key={category.id}><Link  id="catPosts" onClick={this.handleClick} to={`/categories/${category.id}`} >{category.category}</Link></li>

)
})
}





export default CategoriesList;
