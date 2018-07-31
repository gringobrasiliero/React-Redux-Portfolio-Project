import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from './posts';
import Posts from './posts';



const Category = ({id, category}) => (
  <li><Link onClick={this.handleClick} key={id} id={id} to={`/categories/${id}`}>{category}</Link></li>
)


const CategoriesList = ({categories}) => (
  <div id="nav-bar">
  <ul>
 { categories.map(category => <Category id={category.id} category={category.category} key={category.id} />) }
  </ul>
   </div>
  )




export default class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
    // this.handleClick = this.handleclick.bind(this);


  }

  fetchCategories = () => {
    fetch('/categories')
      .then(response => response.json())
      .then(categories => this.setState({categories}))

  }



  fetchCatPosts = () => {
    fetch(`categories/${this.id}/posts`)
      .then(response => response.json())
      .then(posts => this.setState({posts}));
  }


  handleClick(event) {
      event.preventDefault();
      this.fetchCatPosts();
      console.log("HI!")
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
