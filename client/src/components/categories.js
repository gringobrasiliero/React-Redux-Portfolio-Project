import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from './posts';
import Posts from './posts';
import { connect } from 'react-redux';
import CategoriesList from './categoriesList'
import Category from './category'
import {fetchCategories}  from '../actions/fetchCategories'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/fetchCategories'




class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
    // this.handleClick = this.handleClick.bind(this);


  }

  fetchCategories = () => {
    fetch('/categories')
      .then(response => response.json())
      .then(categories => this.setState({categories}))

  }

  fetchCatPosts = () => {
    fetch(`categories/${this.id}/posts`)
      .then(response => response.json())
      .then(posts => this.setState({posts}));

  }





  componentWillMount() {
    console.log(this.props.actions)
    this.props.actions.fetchCategories();


  }

  componentWillUnmount() {
      // document.addEventListener('click', this.handleClick, true);
    }


render() {
  return(
    <div>
<CategoriesList categories={this.props.categories} />
</div>
);
}


};

function mapStateToProps(state) {
  debugger
  console.log('in map state to props')
    console.log({categories: state.categories})
  return {categories: state.categories};

};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}





export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
