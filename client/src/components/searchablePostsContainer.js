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
}

searchPosts = (e) => {
  e.preventDefault();
  newsapi.v2.topHeadlines({


  category: 'politics',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
}

handleChange =(e) => {
  this.setState({
    value: e.target.value
  })
}

componentDidMount = () => {

  newsapi.v2.topHeadlines({
  category: 'politics',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);

  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
}

render() {
  return(
    <div className='searchable-posts'>

      <form>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button type='submit' onClick={this.searchPosts.bind(this)} >Click</button>
      </form>
        <PostLists posts={this.state.posts}/>
      </div>
  )
}

}
