import React, { Component } from 'react';
import { connect } from 'react-redux';
import postList from '../components/posts/postList'
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
  const category = state.categories.find(category => category.id.toString() === ownProps.match.params.catId);
  const posts = arraySort(state.posts, 'created_at', {reverse: true} )

  if (category && posts) {
    return { posts, category}
  }else {
    return{ category: {}
    }
  }
};

export default connect(mapStateToProps)(CategoriesShow);
