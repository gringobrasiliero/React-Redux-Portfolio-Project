import React from 'react';
import { Link } from 'react-router-dom';
import Users from '../containers/Users'
 const Header = () => {
    return(
      <div className="App">

          <header className="App-header">
            <h1 className="App-Title">Neddit</h1>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/posts'}>Posts</Link></li>
              <li><Link to={'/login'}>Log in</Link></li>
              <li><Link to={'/signup'}>Sign Up</Link></li>

            </ul>
            <Users />
          </header>
      </div>
    )
}

export default Header
