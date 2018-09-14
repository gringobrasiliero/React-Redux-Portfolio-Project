import React, { Component } from 'react';
import '../App.css';
import '../index.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import Posts from './Posts'
import Categories from './Categories'
import Articles from './Articles'
import Header from '../components/header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {fetchCategories} from '../actions/category-actions';
import {fetchPosts} from '../actions/posts-actions';
import {fetchComments} from '../actions/comment-actions';
require('dotenv').config();

class App extends Component {

  componentDidMount() {
    console.log('in component did mount')
    this.props.fetchCategories();
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Header} />
             <Route exact path="/" component={Articles} />
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
