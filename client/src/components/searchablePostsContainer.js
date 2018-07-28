import React, { Component } from 'react';
import Posts from './posts';
import PostLists from './posts';

const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_SECRET_KEY);



export default class SearchablePostsContainer extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    posts: [],
    searchCat: ''
  }
  this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

}

searchPosts = (e) => {
  e.preventDefault();

  newsapi.v2.topHeadlines({
  category: `${this.state.searchCat}`,
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);

});
}

handleChange =(e) => {
  this.setState({
    searchCat: e.target.value
  })
}
handleSubmit(event) {
    alert(this.state.searchCat);
    newsapi.v2.topHeadlines({
    category: `${this.state.searchCat}`,
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log(response);


  });
    event.preventDefault();
  }
componentDidMount = () => {

  newsapi.v2.topHeadlines({
  category: 'politics',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);

});
}

render() {
  return(
    <div className='searchable-posts'>

     <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.searchCat} onChange={this.handleChange} />
        <input type='submit' value="Submit" />
      </form>

      </div>
  )
}

} //End of Class
