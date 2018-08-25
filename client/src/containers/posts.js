import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import Categories from './categories'
import PostList from '../components/posts/postList'
import PostsShow from '../components/posts/postsShow'
import {fetchComments} from '../actions/comment-actions';
import {fetchPosts, fetchCatPosts} from '../actions/posts-actions';
import {fetchCategories} from '../actions/category-actions';
var arraySort = require('array-sort');

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: null,
      status: 0,
    };
  }

  startInterval = () => {
    console.log("INTERVAL")
    this.interval = setInterval(this.props.fetchPosts, 10000);
   }

   cleanUpInterval = () => {
     clearInterval(this.interval);
   }

  componentDidMount() {
    console.log('POST in component did mount')
    this.startInterval()
    this.props.fetchPosts();
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.posts !== nextProps.props) {
      return true;
    }
    console.log("POSTS no update")
    return false;
  }

  render() {
    const { match } = this.props;
    return(
      <React.Fragment>
        <Switch>
          <Route exact path={`${match.url}/:postId`} component={PostsShow}/>
          <Route exact path={match.url} render={() => (
            <div>
              <ul id="nav-bar">
              <Categories />
              <h1>All</h1>
              </ul>
              <PostList posts={this.props.posts} />
            </div>
          )}/>
        </Switch>
      </React.Fragment>
    )
  }

  componentWillUnmount() {
    this.cleanUpInterval()
  }


} // End of Class

const mapStateToProps = (state, ownProps) => {
  console.log('in map state to props')
  return{
    posts: arraySort(state.posts, 'created_at', {reverse: true} ),
    postId: ownProps.match.params.postId

  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("Mapped dispatch to props")
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    fetchCatPosts: bindActionCreators(fetchCatPosts, dispatch),
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
    fetchComments: bindActionCreators(fetchComments, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
