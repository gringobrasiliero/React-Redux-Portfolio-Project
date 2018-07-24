import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './components/categories';
import Header from './components/header';

class App extends Component {

  componentDidMount() {
      fetch('/categories')
          .then(response => response.json())
          .then(categories => console.log(categories));
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
