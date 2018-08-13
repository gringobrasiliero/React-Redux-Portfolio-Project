import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import User from './containers/users';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Home from './Home';
import PostsContainer from './containers/posts'
import CategoriesContainer from './containers/categories';
import CategoriesShow from './containers/categoriesShow'
import PostsShow from './components/posts/postsShow'
import {fetchCategories} from './actions/category-actions';
import {fetchPosts} from './actions/posts-actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchComments, newComment} from './actions/comment-actions';


// import ArticlesContainer from './components/articlesContainer';
require('dotenv').config();



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    setTimeout(() => {
      this.setState({
        status: 0
      });
    },3000);
  }


    componentDidMount() {
      console.log('in component did mount')
      this.props.fetchCategories();
      this.props.fetchPosts();
      this.props.fetchComments();
     }


  render() {
    return (
      <Router>
      <React.Fragment>
        <Route path="/" component={Header} />
           <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={PostsContainer} />
              <Route exact path="/posts/:postId"  component={PostsShow} />
           <Route exact path="/categories" component={CategoriesContainer} />
         <Route exact path="/categories/:categoryId"  component={CategoriesShow} />
      <Route exact path="/users/login" component={User} />
      <Route exact path="/users/sign_up" component={User} />

         </React.Fragment>
        </Router>
    );
  }
}


const mapStateToProps = state => ({
  categories: state.categories,
  users: state.users,
  votes: state.votes,
})

function mapDispatchToProps(dispatch) {
  console.log("Mapped dispatch to props")
  return {
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    fetchComments: bindActionCreators(fetchComments, dispatch),

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
