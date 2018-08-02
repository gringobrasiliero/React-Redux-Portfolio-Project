
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostsContainer from './posts'
import PostList from './posts'

const Category = ({id, category, key}) => (
  <li id="catPosts"><Link key={key}  id={id} to={`/categories/${id}/posts`}>{category}</Link></li>
)

export default Category
