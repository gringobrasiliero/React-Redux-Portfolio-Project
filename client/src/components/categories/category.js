import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Postlist from '../posts/postList';
import Posts from '../posts/postComponent';

import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';

import CategoriesList from './categoriesList';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
        category: this.props.category,
        id: this.props.id,

      status: 0,


    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    },3000);
  }



  componentDidMount() {
    console.log('in component did mount')
    this.props.fetchCatPosts();

  }

  componentWillReceiveProps(nextProps) {
    console.log("Component will recieve props", nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update:", nextProps, nextState)
    if (nextState.status === 1) {
      return false;
    }
    return true;
    }

componentWillUpdate(nextProps, nextState) {
    console.log("Component Will Update:", nextProps, nextState)
}

componentDidUpdate(prevProps, prevState) {
  console.log("Component Did Update:", prevProps, prevState)

}

componentWillUnmount() {
  console.log("Component will unmount")
}

   render() {
     return(
       <div>
          <h1>Category page </h1>
          <h1>{this.state.id}</h1>
          <Postlist />

       </div>
     )
   }



}


const mapStateToProps = (state) => {
  console.log('in map state to props')
  return{
    categories: state.categories,
    posts: state.posts
  // users: state.users,
  // votes: state.votes,
  }
}

function mapDispatchToProps(dispatch) {
  console.log("Mapped dispatch to props")
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category);
