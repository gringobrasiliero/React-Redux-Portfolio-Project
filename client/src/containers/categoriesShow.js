import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from '../components/posts/PostList'
import arraySort from 'array-sort'

class CategoriesShow extends Component {
  constructor(props){
  super(props);

    this.state = {
      posts: props.posts,
    }
}

static getDerivedStateFromProps(nextProps, prevState){
   if(nextProps.posts!==prevState.posts){
     return { posts: nextProps.posts};
  }
  else return null;
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
    <div className="col-md-8">
      <h1>{this.props.category.category}</h1>
      <h2>Sort By:
        <button id="likes" onClick={this.handleClick}>Most Popular</button>
        <button id="least popular" onClick={this.handleClick}>Least Popular</button>
        <button id="created_at" onClick={this.handleClick}>Most Recent</button>
      </h2>
      <PostList posts={this.state.posts} />
    </div>
  ) : (
    <div>Loading...</div>
  )
}

}

const mapStateToProps = (state, ownProps) => {
  const catId = ownProps.match.params.postId;
  const category = state.categories.find(category => category.id.toString() === ownProps.match.params.catId);
  const posts = state.posts;
  if (category && posts) {
    return { posts, category, catId }
  }else {
    return{ category: {},

          }
  }
};

export default connect(mapStateToProps)(CategoriesShow);
