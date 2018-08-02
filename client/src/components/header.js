import React, { Component } from 'react';
import Categories from './categories';
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
              <li><Link to={'/categories'}>Categories</Link></li>
            </ul>

            <Categories categories={this.props.categories}/>
          </header>
      </div>
    )
  }

}
