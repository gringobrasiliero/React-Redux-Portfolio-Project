import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoriesList from '../components/categories/categoriesList'
import CategoriesShow from '../components/categories/categoriesShow'

import {fetchCategories, fetchCatPosts} from '../actions/category-actions';
import {fetchPosts} from '../actions/posts-actions';
import {bindActionCreators} from 'redux'
import { Route, Switch } from 'react-router-dom';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catId: "",
    };
    setTimeout(() => {
      this.setState({
        status: 0
      });
    },3000);
  }

  handleChange = (e) => {
    this.setState({catId: e.target.value});
  }



  handleClick = (e) => {
    alert(e.target.id);
      this.props.fetchCatPosts(`/categories/${e.target.id}/posts`);

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.categories !== nextProps.categories || this.props.posts !== nextProps.posts ) {
      return true;
    }
    console.log("CAT no update")
    return false;
  }

  render() {
    const { match, categories } = this.props;

    return(
      <React.Fragment>

      <div>
        <CategoriesList categories={this.props.categories} onHandleChange={this.handleChange} onHandleClick={this.handleClick}  />
      </div>


      <Switch>
      <Route path='/categories/:catId/posts' component={CategoriesShow} />

      </Switch>



      </React.Fragment>




    )
  }
}

const mapStateToProps = (state) => {
  console.log('in map state to props')
  return{
    categories: state.categories,
    posts: state.posts,
    catId: state.catId
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("Mapped dispatch to props")
  return {
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
    fetchCatPosts: bindActionCreators(fetchCatPosts, dispatch),
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
