
import React, { Component } from 'react';

import './App.css';
import Categories from './components/categories';
import Header from './components/header';
import Posts from './components/posts';
import Vote from './components/votes';

import SearchablePostsContainer from './components/searchablePostsContainer';
require('dotenv').config();
class App extends Component {



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

<SearchablePostsContainer />
        </header>


        <Posts />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
        </body>
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
