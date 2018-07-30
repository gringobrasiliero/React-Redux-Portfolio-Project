
import React, { Component } from 'react';
import './App.css';
import CategoriesContainer from './components/categories'
import SearchablePostsContainer from './components/searchablePostsContainer';
import PostsContainer from './components/posts'
require('dotenv').config();



const Categories = () => (
      <div className="App">

<h1>This is my Categories page </h1>

<PostsContainer />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>


)

export default Categories;
