import React, { Component } from 'react';
import Categories from './categories';
import SearchablePostsContainer from './searchablePostsContainer';
export default class Header extends Component {
  render() {
    return(
      <div className="App">
          <header className="App-header">
            <h1 className="App-Title">Neddit</h1>
            <Categories />
            <SearchablePostsContainer />
          </header>
      </div>
    )
  }

}
