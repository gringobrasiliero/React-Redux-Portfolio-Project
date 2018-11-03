import React, { Component } from 'react';
import '../App.css';
import '../index.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import Posts from './posts'
import Categories from './categories'
import Articles from './articles'
import Users from './Users'
import Header from '../components/header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {fetchCategories} from '../actions/category-actions';
import {fetchPosts} from '../actions/posts-actions';
import {fetchComments} from '../actions/comment-actions';
import {fetchLocation} from '../actions/location-actions';

require('dotenv').config();

class App extends Component {

  getCoords = () => {
    if (navigator.geolocation) { //check if geolocation is available
              navigator.geolocation.getCurrentPosition(position =>{
                this.props.fetchLocation( position.coords.latitude, position.coords.longitude);
              });
          }
  }


  componentDidMount() {
    this.props.fetchCategories();
    this.getCoords()
  }

  render() {
    return (

      <Router>
        <React.Fragment>
          <Route path="/" component={Header} />
             <Route exact path="/" component={Articles} />
                <Route path="/posts" component={Posts} />
              <Route path='/categories' component={Categories} />
              <Route path='/categories' component={Users} />
        </React.Fragment>
      </Router>
    );
  }
} // End of Class


const mapStateToProps = (state) => {
  let x = [];
  state.posts.forEach(post=> x.push(post.category_id))
  console.log(x)
  return{
    categories: state.categories.filter(cat=> x.includes(cat.id)),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    fetchComments: bindActionCreators(fetchComments, dispatch),
    fetchLocation: bindActionCreators(fetchLocation, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
