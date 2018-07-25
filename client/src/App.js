import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './components/categories';
import Header from './components/header';
import Posts from './components/posts';
class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">



            <Header />
<Categories />
<Posts />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
