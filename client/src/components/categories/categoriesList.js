import React from 'react';
import { Link } from 'react-router-dom';


// let catList = this.props.categories.map( category => <li key={category.id}>{category.category}</li>)


const CategoriesList = (props) => {

 const renderCategories = props.categories.map(category =>
    <option id="catPosts" key={category.id}><Link  id={category.id} onClick={this.handleClick} to={`/categories/${category.id}`} >{category.category}</Link></option>
);
return(
<div>
  <h3><strong>Saved Categories </strong>
  <select>
    {renderCategories}
  </select>
  </h3>
</div>
);
}






export default CategoriesList;
