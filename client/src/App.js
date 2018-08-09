
import React, { Component } from 'react';

import './App.css';
// import Categories from './containers/categories';
// import Category from './components/categories/category';
import Header from './components/header';
// import Posts from './containers/posts';
// import Vote from './components/votes';
import User from './containers/users';

// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Login from './components/users/Login'
// import Signup from './components/users/Signup'

import './index.css';
// import {bindActionCreators} from 'redux'
// import { connect } from 'react-redux';
// import {compose, createStore} from 'redux'
import Home from './Home';
import PostsContainer from './containers/posts'
// import {fetchCategories} from './actions/category-actions';
import CategoriesContainer from './containers/categories';
import Category from './components/categories/category'


// import SearchablePostsContainer from './components/searchablePostsContainer';
require('dotenv').config();



export default class App extends Component {



  render() {
    return (
      <Router>
      <React.Fragment>
        <Route path="/" component={Header} />
           <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={PostsContainer} />
           <Route exact path="/categories" component={CategoriesContainer} />
         <Route exact path="/categories/:id" component={Category} />
      <Route exact path="/users/login" component={User} />
      <Route exact path="/users/sign_up" component={User} />


         </React.Fragment>
        </Router>
    );
  }
}

//
// const mapStateToProps = state => ({
//   categories: state.categories,
//   users: state.users,
//   votes: state.votes,
// })
//
// const mapActionsToProps = {
//   onFetchCategories: fetchCategories
// };
//
//
//
//
// export default connect(mapStateToProps, mapActionsToProps)(App);
