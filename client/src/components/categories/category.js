import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Postlist from '../posts/postList';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class Category extends Component {
  constructor(props) {
    super(props);


    this.state = {
    };

  }

  handleClick = (event) => {
      event.preventDefault();
      alert("Cat hiiiiiiiiiiiiiiiiiii");
      this.setState({status: 0})
      this.props.fetchCatPosts();

      fetch(`categories/${event.target.id}/posts`)
        .then(response => response.json())
        .then(posts => this.setState({posts}));

  }

  componentDidMount() {
       console.log('in component did mount')


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

   // componentWillUpdate(nextProps, nextState) {
   //   console.log("Component Will Update:", nextProps, nextState)
   // }
   //
   // componentDidUpdate(prevProps, prevState) {
   // console.log("Component Did Update:", prevProps, prevState)
   //
   // }
   //
   // componentWillUnmount() {
   // console.log("Component will unmount")
   // }

render() {

  return(
    <div>
       <h1>Category page </h1>


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
    // fetchCategories: bindActionCreators(fetchCategories, dispatch),
    // fetchCatPosts: bindActionCreators(fetchCatPosts, dispatch),

  }
}









export default connect(mapStateToProps, mapDispatchToProps)(Category);
