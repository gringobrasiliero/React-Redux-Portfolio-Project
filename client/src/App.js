import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export class Header extends Component {
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









class App extends Component {

  componentDidMount() {
      fetch('http://localhost:3001/api/posts')
          .then(response => response.json())
          .then(posts => console.log(posts));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">



            <Header />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
