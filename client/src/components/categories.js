import React, { Component } from 'react';

export default class Categories extends Component {
  constructor(props) {
    super(props);

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
      .then(categories => this.setState({ categories}))
  }


renderCategories = () => {
  return this.state.categories.map(cat => {
    return(
<div>
      <li key={cat.id}> {cat.category}</li>
    </div>
    )
  })
}


render() {
  return(
<div id="nav-bar">
<ul>
{this.renderCategories()}
</ul>
</div>
  )
}


}
