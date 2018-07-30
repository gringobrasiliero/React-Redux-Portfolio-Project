
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostsContainer from './posts'
import PostList from './posts'


const find = id => PostsContainer.find(p => p.category_id == id);



const Category = ({match}) => (
  <div>
  <h3> {match.params.id}  {find}</h3>

  <PostsContainer posts={find} />

  </div>
);











export default Category
