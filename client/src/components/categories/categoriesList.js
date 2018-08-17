import React from 'react';




const CategoriesList = ({ categories, onHandleClick, onHandleChange }) => (
<form onSubmit={onHandleClick}>
  <select onChange={onHandleChange} value={this.value}  >
    <option value="0" >All</option>
    {categories.map(category =>
      <option key={category.id} id={category.category} value={category.id}>{category.category}</option>
    )}
  </select>
  <input type="submit" value="Submit" />
  </form>

)




export default CategoriesList;
