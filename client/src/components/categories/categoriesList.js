import React from 'react';
import { Link } from 'react-router-dom';


// let catList = this.props.categories.map( category => <li key={category.id}>{category.category}</li>)


const CategoriesList = (props) => {

 return props.categories.map((category) => {
    return (

  <li id="catPosts" key={category.id}><Link  id={category.id} onClick={this.handleClick} to={`#`} >{category.category}</Link></li>

)
})
}





export default CategoriesList;
