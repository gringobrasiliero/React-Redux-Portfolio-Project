import React from 'react'
import { Link } from 'react-router-dom';

const Category = (props) => (
  <li><Link key={props.id} id={props.id} onClick={props.handleClick} to={`/categories/${props.id}/posts`}>{props.category}</Link></li>
)

export default Category
