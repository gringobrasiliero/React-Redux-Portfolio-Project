import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from './posts';
import Posts from './posts';



const Category = (id, category) => {
  <li><Link key={id} to={`/categories/${id}`}>{category}</Link></li>
}


const renderCategories = ({categories}) => (
  <div id="nav-bar">
  <ul>
 { categories.map(cat => <Category id={cat.id} category={cat.category} />) }
  </ul>
   </div>
  )

  


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





render() {
  return(
<h1>This shouldnt be appearing anywhere</h1>
  )
}


}
