import React from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown, Segment } from 'semantic-ui-react'

// let catList = this.props.categories.map( category => <li key={category.id}>{category.category}</li>)



const CategoriesList = ({ categories, onHandleChange }) => (

  <select onChange={onHandleChange} defaultValue='all'>
    <option value='all'>All</option>
    {categories.map(category =>
      <option key={category.id} value={category.id}>{category.category}</option>
    )}
  </select>

)




export default CategoriesList;
