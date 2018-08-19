import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Posts from './containers/posts'
import PostsShow from './components/posts/postsShow'
import {fetchCategories} from './actions/category-actions';
import {fetchPosts} from './actions/posts-actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchComments} from './actions/comment-actions';

require('dotenv').config();



class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //   };
  //   setTimeout(() => {
  //     this.setState({
  //       status: 0
  //     });
  //   },3000);
  // }
  //
  // componentDidMount() {
  //   console.log('in component did mount')
  //   this.props.fetchCategories();
  //   this.props.fetchPosts();
  // }
  //
  // componentWillUnmount() {
  //   this.props.fetchCategories();
  //   this.props.fetchPosts();
  // }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Header} />
             <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/posts/:postId"  component={PostsShow} />
        </React.Fragment>
      </Router>
    );
  }
} // End of Class

//
// const mapStateToProps = state => ({
//   categories: state.categories,
//   users: state.users,
// })
//
// const mapDispatchToProps = (dispatch) => {
//   console.log("Mapped dispatch to props")
//   return {
//     fetchCategories: bindActionCreators(fetchCategories, dispatch),
//     fetchPosts: bindActionCreators(fetchPosts, dispatch),
//     fetchComments: bindActionCreators(fetchComments, dispatch),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
