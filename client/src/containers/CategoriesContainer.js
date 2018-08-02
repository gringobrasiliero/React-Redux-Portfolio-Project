// import React from 'react';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Categories from '../components/categories';
//
//
// const CategoriesPage = ({ match, categories }) =>
//   <div>
//     <CategoriesList categories={categories} />
//     <Route path={`${match.url}/:movieId`} component={CategoriesShow}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a Movie from the list.</h3>
//     )}/>
//   </div>;
//
// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories
//   };
// }
//
// export default connect(mapStateToProps)(CategoriesPage);
