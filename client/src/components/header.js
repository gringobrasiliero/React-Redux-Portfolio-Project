import React from 'react';
// import ArticlesContainer from './articlesContainer';
import { Link } from 'react-router-dom';

 const Header = () => {
    return(
      <div className="App">
          <header className="App-header">
            <h1 className="App-Title">Neddit</h1>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/posts'}>Posts</Link></li>
            </ul>
          </header>
      </div>
    )
}

export default Header
