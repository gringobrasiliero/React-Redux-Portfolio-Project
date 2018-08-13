import React from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown, Segment } from 'semantic-ui-react'

// let catList = this.props.categories.map( category => <li key={category.id}>{category.category}</li>)



const CategoriesList = ({ categories, onHandleClick, onHandleChange }) => (
<form onSubmit={onHandleClick}>
  <select onChange={onHandleChange} value={this.value}  >
    <option>Select a Category</option>
    {categories.map(category =>
      <option  key={category.id} id={category.category} value={category.id}>{category.category}</option>
    )}
  </select>
  <input type="submit" value="Submit" />
  </form>

)




export default CategoriesList;
