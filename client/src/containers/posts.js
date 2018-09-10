import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostsShow from './PostsShow'
import PostsIndex from './PostsIndex'
import {fetchComments} from '../actions/comment-actions';
import {fetchPosts, fetchCatPosts, deleteOldPost} from '../actions/posts-actions';
import {fetchCategories} from '../actions/category-actions';
import arraySort from 'array-sort'


class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: null,
      status: 0,
      likes: 0,
      posts: props.posts }

  }

  handleClick = (e) => {
    e.preventDefault;
    if (e.target.id === "least popular"){
      this.setState({
        posts: arraySort(this.state.posts, "likes")
      })
    }else{
    this.setState({
      posts: arraySort(this.state.posts, e.target.id, {reverse: true} )
    })
  }
  }

  startInterval = () => {
    console.log("INTERVAL")
    this.interval = setInterval(this.props.fetchPosts, 10000);
   }

   checkForOldPosts = () => {
     console.log(this.props.posts)
     let i;
     for (i = 0; i < this.state.posts.length; i++) {
       let postCreatedAt = Date.parse(this.state.posts[i].created_at);
       let now = Date.now();
       let daysAgo = Math.floor((now-postCreatedAt)/86400/1440)
       if( daysAgo >= 0 ){
         let oldPostId = this.state.posts[i].id;
         let oldPost = this.state.posts[i];
         this.props.deleteOldPost(`/posts/${oldPostId}`, oldPost);
         console.log("deleting " + oldPostId)
}
}
   }

   cleanUpInterval = () => {
     clearInterval(this.interval);
   }

  componentDidMount() {
    console.log('POST in component did mount')
    // this.startInterval()
    this.props.fetchPosts();
    this.checkForOldPosts();

  };

  componentWillReceiveProps(nextProps){
  if (nextProps.posts !== this.props.posts) {
    this.setState({ posts: nextProps.posts })
  }
}

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
          <Route exact path={match.url} render={(props) => {
            return (
              <PostsIndex  posts={this.state.posts} categories={this.props.categories} handleClick={this.handleClick} />
            )
          }}/>

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
  category_id: 0,
  likes: 0
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
    likes: state.likes

  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("Mapped dispatch to props")
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    fetchCatPosts: bindActionCreators(fetchCatPosts, dispatch),
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
    fetchComments: bindActionCreators(fetchComments, dispatch),
    deleteOldPost: bindActionCreators(deleteOldPost, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
