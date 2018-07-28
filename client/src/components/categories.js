import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
      <li><Link key={cat.id} to={`/categories/${cat.id}`}>{cat.category}</Link></li>
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
