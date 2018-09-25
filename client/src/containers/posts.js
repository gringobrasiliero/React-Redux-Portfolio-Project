import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostsShow from './postsShow'
import PostsIndex from './postsIndex'

import {fetchPosts, deleteOldPost} from '../actions/posts-actions';
import arraySort from 'array-sort'

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: props.posts
    }
  }

  handleClick = (e) => {
    if (e.target.id === "least popular"){
      // grab all the posts
      // iterate through
      // sort
    let sortingPosts =  this.state.posts;
    sortingPosts.sort(function(a, b){return a.likes- b.likes});

      this.setState(function(prevState){
        return {
          posts: prevState.sort
        }
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
     let i;
     for (i = 0; i < this.state.posts.length; i++) {
       let postUpdatedAt = Date.parse(this.state.posts[i].updated_at);
       let now = Date.now();
       let daysAgo = Math.floor((now-postUpdatedAt)/86400/1440)
       if( daysAgo >= 3 ){
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

  static getDerivedStateFromProps(nextProps, prevState){
     if(nextProps.posts!==prevState.posts){
       return { posts: nextProps.posts};
    }
    else return null;
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
    categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("Mapped dispatch to props")
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    deleteOldPost: bindActionCreators(deleteOldPost, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
