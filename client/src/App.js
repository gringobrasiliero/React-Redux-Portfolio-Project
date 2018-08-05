
import React, { Component } from 'react';

import './App.css';
import Categories from './containers/categories';
import Category from './components/categories/category';
import Header from './components/header';
import Posts from './containers/posts';
import Vote from './components/votes';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import LoginForm from './components/users/LoginForm'
import './index.css';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import {applyMiddleware, compose, combineReducers, createStore} from 'redux'
import Login from './login';
import Home from './Home';
import PostsContainer from './containers/posts'
import {fetchCategories} from './actions/categoryActions';



import SearchablePostsContainer from './components/searchablePostsContainer';
require('dotenv').config();



export default class App extends Component {



  render() {
    return (
      <Router>
      <React.Fragment>
        <Route path="/" component={Header} />
           <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={PostsContainer} />
           <Route exact path="/categories" component={Categories} />
         <Route exact path="/categories/:id/posts" component={Category} />
      <Route exact path="/login" component={LoginForm} />


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
