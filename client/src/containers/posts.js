import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostsShow from './postsShow'
import PostsIndex from './postsIndex'
import {fetchComments} from '../actions/comment-actions';
import {fetchPosts, fetchCatPosts} from '../actions/posts-actions';
import {fetchCategories} from '../actions/category-actions';
import arraySort from 'array-sort'


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
          <Route exact path={match.url} component={PostsIndex}/>
        </Switch>
      </React.Fragment>
    )
  }

  componentWillUnmount() {
    this.cleanUpInterval()
  }


} // End of Class
Posts.defaultProps = {
  title: "",
  description: "",
  url: "",
  urlToImage: "",
  id: 0,
  category_id: 0
}


Posts.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  id: PropTypes.number.isRequired,
  category_id: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => {
  console.log('in map state to props')
  return{
    posts: arraySort(state.posts, 'created_at', {reverse: true} ),
    postId: ownProps.match.params.postId,
    categories: state.categories,

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
