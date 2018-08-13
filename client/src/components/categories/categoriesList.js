import React from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown, Segment } from 'semantic-ui-react'

// let catList = this.props.categories.map( category => <li key={category.id}>{category.category}</li>)



const CategoriesList = ({ categories, onHandleClick }) => (

  <select onChange={onHandleClick}  >

    {categories.map(category =>
      <option  onClick={onHandleClick} key={category.id} id={category.category} value={category.id}>{category.category}</option>
    )}
  </select>

)




export default CategoriesList;
