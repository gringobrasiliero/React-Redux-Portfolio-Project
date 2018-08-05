import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from '../components/posts/postList';
import Posts from '../components/posts/postComponent';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories/categoriesList'
import {fetchCategories} from '../actions/categoryActions';
import {bindActionCreators} from 'redux'




class CategoriesContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.onFetchCategories = this.onFetchCategories.bind(this)
  //   // this.onLoadCategories = this.onLoadCategories.bind(this)
  //
  //   this.state = {
  //   categories: []
  //   };
  //   // this.handleClick = this.handleClick.bind(this);
  //
  //
  // }

//
// onFetchCategories() {
//   this.props.onFetchCategories();
// }
//
// onLoadCategories() {
//   this.props.onLoadCategories();
// }
  // fetchCategories = () => {
  //   fetch('/categories')
  //     .then(response => response.json())
  //     .then(categories => this.setState({categories}))
  //
  // }

  fetchCatPosts = (e) => {
    e.preventDefault()
    fetch(`categories/${this.id}/posts`)
      .then(response => response.json())
      .then(posts => this.setState({posts}));

  }


  // handleClick(event) {
  //     event.preventDefault();
  //     this.fetchCatPosts();
  //     alert(event.target.getAttribute('id'));
  // }


  componentDidMount() {

       console.log('in component did mount')
       this.props.fetchCategories();


   }



// let catList = this.props.categories.map( category => <li key={category.id}>{category.category}</li>)



render() {
  return(
    <div>
<CategoriesList categories={this.props.categories} />
</div>
  )
}


}



// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }


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
  }
}

// const mapActionsToProps = (dispatch, props) => {
// console.log("Mapping actions to props")
// return bindActionCreators({
//   onFetchCategories: fetchCategories,
// }, dispatch);
// };








export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
