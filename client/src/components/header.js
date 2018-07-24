import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return(
      <div>
      <h1 className="App-Title">Neddit</h1>

      <div id="nav-bar">
      <ul>
      <li>All</li>
      <li>Dogs</li>
      <li>Cats</li>
      </ul>
    </div>
      </div>
    )
  }

}
