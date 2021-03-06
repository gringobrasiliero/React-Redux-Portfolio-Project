import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoriesList from '../components/categories/categoriesList'
import CategoriesShow from './categoriesShow'


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
  }

  startInterval = () => {
    this.interval = setInterval(this.props.fetchCatPosts(this.props.location.pathname), 10000);
   }

   cleanUpInterval = () => {
     clearInterval(this.interval);
   }


  handleChange = (e) => {
    this.setState({catId: e.target.value});
  }

  handleClick = (e) => {
      this.props.fetchCatPosts(`/categories/${e.target.id}/posts`);
  }

  componentDidMount() {
    // this.startInterval();
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.categories !== nextProps.categories || this.props.posts !== nextProps.posts ) {
      return true;
    }
    console.log("CAT no update")
    return false;
  }

  render() {
    return(
      <React.Fragment>
        <CategoriesList categories={this.props.categories} onHandleChange={this.handleChange} onHandleClick={this.handleClick}  />
        <Switch>
          <Route path='/categories/:catId/posts' component={CategoriesShow} />
        </Switch>
      </React.Fragment>
    )
  }

  componentWillUnmount() {
    this.cleanUpInterval()
  }


} //End of class

Categories.defaultProps = {
  category: "",
  id: 0
}

Categories.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}



const mapStateToProps = (state) => {
  let x = [];
  state.posts.forEach(post=> x.push(post.category_id))

  return{
    categories: state.categories.filter(cat=> x.includes(cat.id)),
    posts: state.posts,
    catId: state.catId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
    fetchCatPosts: bindActionCreators(fetchCatPosts, dispatch),
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
