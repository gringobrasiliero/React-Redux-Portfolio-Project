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
    console.log("INTERVAL")
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
    this.startInterval();
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
    console.log("CAT UNMOUNT")
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
  console.log('in map state to props')
  debugger
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
