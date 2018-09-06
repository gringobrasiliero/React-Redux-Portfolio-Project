import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from '../components/posts/PostList'
import CategoriesList from '../components/categories/CategoriesList'
import arraySort from 'array-sort'


class PostsIndex extends Component {
  constructor(props){
  super(props);

    this.state = {
      posts: props.posts,
    }
}

componentWillReceiveProps(nextProps){
  if (nextProps.posts !== this.props.posts) {
    this.setState({ posts: nextProps.posts })
  }
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

render() {
  console.log(this.state)
  return this.state.posts ? (
    <div>
      <ul id="nav-bar">
      <CategoriesList categories={this.props.categories} />
      <h1>All</h1>
      <h2>Sort By:
        <button id="likes" onClick={this.handleClick}>Most Popular</button>
        <button id="least popular" onClick={this.handleClick}>Least Popular</button>
        <button id="created_at" onClick={this.handleClick}>Most Recent</button>
      </h2>
      </ul>
      <PostList posts={this.state.posts} onHandleClick={this.props.onClick} />
    </div>
  ) : (
    <div>Loading...</div>
  )
}

}

const mapStateToProps = (state, ownProps) => {
  const categories = state.categories;
  const posts = state.posts;
  if (categories && posts) {
    return { categories, posts}
  }else {
    return{ categories: {},
  }
}
}
export default connect(mapStateToProps)(PostsIndex);
