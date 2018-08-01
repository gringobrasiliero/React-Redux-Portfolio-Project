import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postlist from './posts';
import Posts from './posts';


const Category = ({id, category, key}) => (
  <li><Link key={key}  id={id} to={`/categories/${id}/posts`}>{category}</Link></li>
)


const CategoriesList = ({categories}) => (
  <div id="nav-bar">
  <ul id="catPosts">
 { categories.map(category => <Category id={category.id}  category={category.category} key={category.id} onClick={this.handleClick} />) }
  </ul>
   </div>
  )




export default class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
    // this.handleClick = this.handleClick.bind(this);


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


  // handleClick(event) {
  //     event.preventDefault();
  //     this.fetchCatPosts();
  //     alert(event.target.getAttribute('id'));
  // }



  componentDidMount() {
    this.fetchCategories();


  }

  componentWillUnmount() {
      // document.addEventListener('click', this.handleClick, true);
    }


render() {
  return(
    <div>
<CategoriesList categories={this.state.categories} />
</div>
  )
}


}
