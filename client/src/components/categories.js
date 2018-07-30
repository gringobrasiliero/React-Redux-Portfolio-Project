import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from './posts';
import Posts from './posts';



const Category = ({id, category}) => (
  <li><Link key={id} to={`/categories/${id}`}>{category}</Link></li>
)


const CategoriesList = ({categories}) => (
  <div id="nav-bar">
  <ul>
 { categories.map(category => <Category id={category.id} category={category.category} />) }
  </ul>
   </div>
  )




export default class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  fetchCategories = () => {
    fetch('/categories')
      .then(response => response.json())
      .then(categories => this.setState({categories}))

  }

  componentDidMount() {
    this.fetchCategories();
    console.log(this.fetchCategories())

  }


render() {
  return(
    <div>
<CategoriesList categories={this.state.categories} />
</div>
  )
}


}
