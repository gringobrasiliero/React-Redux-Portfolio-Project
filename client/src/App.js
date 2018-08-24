import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Posts from './containers/posts'
import Categories from './containers/categories'

import PostsShow from './components/posts/postsShow'
import CategoriesShow from './components/categories/categoriesShow'

import {fetchCategories} from './actions/category-actions';
import {fetchPosts} from './actions/posts-actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchComments} from './actions/comment-actions';

require('dotenv').config();



class App extends Component {


  componentDidMount() {
    console.log('in component did mount')
    this.props.fetchCategories();
    this.props.fetchPosts();
  }


  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Header} />
             <Route exact path="/" component={Home} />
                <Route path="/posts" component={Posts} />
              <Route path='/categories' component={Categories} />
        </React.Fragment>
      </Router>
    );
  }
} // End of Class


const mapStateToProps = state => ({
  categories: state.categories,
  users: state.users,
})

const mapDispatchToProps = (dispatch) => {
  console.log("Mapped dispatch to props")
  return {
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    fetchComments: bindActionCreators(fetchComments, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
