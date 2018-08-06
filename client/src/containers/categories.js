import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from '../components/posts/postList';
import Posts from '../components/posts/postComponent';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories/categoriesList'
import {fetchCategories, fetchCatPosts} from '../actions/categoryActions';
import {bindActionCreators} from 'redux'
import Category from '../components/categories/category'




class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    // this.onFetchCategories = this.onFetchCategories.bind(this)
    // this.onLoadCategories = this.onLoadCategories.bind(this)

    this.state = {
    categories: []
    };


  }

//
// onFetchCategories() {
//   this.props.onFetchCategories();
// }
//
// onFetchCatPosts() {
//   this.props.onFetchCatPosts();
// }
//
// onLoadCategories() {
//   this.props.onLoadCategories();
// }

  //
  // fetchCategories = () => {
  //   fetch('/categories')
  //     .then(response => response.json())
  //     .then(categories => this.setState({categories}))
  //
  // }

  // fetchCatPosts = (e) => {
  //   e.preventDefault()
  //   fetch(`categories/${this.id}/posts`)
  //     .then(response => response.json())
  //     .then(posts => this.setState({posts}));
  //
  // }


  // handleClick(event) {
  //     event.preventDefault();
  //     this.fetchCatPosts();
  //     alert(event.target.getAttribute('id'));
  // }


  componentDidMount() {
       console.log('in component did mount')
       this.props.fetchCategories();
   }

   // componentDidMount() {
   //   console.log('in component did mount')
   //   this.props.fetchCatPosts();
   //
   // }

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
<CategoriesList categories={this.props.categories} />
</div>
  )
}


}



const mapStateToProps = (state) => {
  console.log('in map state to props')
return{
  categories: state.categories,
  // users: state.users,
  // votes: state.votes,
}
}

function mapDispatchToProps(dispatch) {
console.log("Mapped dispatch to props")
  return {
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
    fetchCatPosts: bindActionCreators(fetchCatPosts, dispatch),

  }
}









export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
