
import React, { Component } from 'react';
import './App.css';
import Categories from './components/categories';
import Header from './components/header';
import Posts from './components/posts';
import Vote from './components/votes';

import SearchablePostsContainer from './components/searchablePostsContainer';
require('dotenv').config();



class Home extends Component {



  render() {
    return (
        <body>
      <div className="App">





        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
        </body>
    );
  }
}

export default Home;
