
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostsContainer from './posts'
import PostList from './posts'
import CategoriesList from './categoriesList'
import { connect } from 'react-redux';

const Category = ({match, categories}) =>
  <div>
    <CategoriesList categories={categories} />
    <Route path={`${match.url}/:id/posts`} component={PostsContainer}/>
    <Route exact path={match.url} render={() => (
      <h3>Select a Category to view some of our communities favorites</h3>
    )}/>
</div>

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    categories: state.categories}
}

export default connect(mapStateToProps)(Category);
