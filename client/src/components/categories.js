import React, { Component } from 'react';

export default class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.fetchCategories()

  }

  fetchCategories = () => {
    fetch('/categories')
    .then(response => response.json())

    .then(categories => console.log(this.setState({ categories})))
  }

render() {
  return(
    <Categories
      categories={this.state.categories}
      />
  );
}


}
