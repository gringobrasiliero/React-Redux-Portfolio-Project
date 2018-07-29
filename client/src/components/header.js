import React, { Component } from 'react';
import CategoriesList from '../containers/categories';
import SearchablePostsContainer from './searchablePostsContainer';
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return(
      <div className="App">
          <header className="App-header">


            <h1 className="App-Title">Neddit</h1>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
            </ul>
            
            <Categories />
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/categories'}>Categories</Link></li>
              <li><Link to={'/login'}>Log In</Link></li>
              <li><Link to={'/posts'}>Posts</Link></li>
            </ul>
            <ul id="nav-bar">
            <CategoriesList categories={this.props.categories} />
            </ul>
          </header>
      </div>
    )
  }

}
