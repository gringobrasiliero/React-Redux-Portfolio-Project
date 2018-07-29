import React, { Component } from 'react';
// import Posts from './posts';
// import PostLists from './posts';
import Vote from './votes';

const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_SECRET_KEY);
const apiKey = process.env.REACT_APP_NEWS_SECRET_KEY

const Post = ({ id, title, description, url, publishedAt, urlToImage}) => (
  <div className="post" key={id} id="posts-list">
<section>

          <h2> {id}</h2>
        <h2> {title}</h2>
        <h2> {description}</h2>
        <h2> {url}</h2>
                <h2> {publishedAt}</h2>
<Vote />
        <img src={urlToImage} />
</section>
      </div>
)

const PostList = ({ posts }) => (
  <div className="post-list">
{ posts.map(post => <Post id={post.id} title={post.title} description={post.description} url={post.url} publishedAt={post.publishedAt} urlToImage={post.urlToImage} />) }
  </div>
)

export default class SearchablePostsContainer extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    posts: [],
    searchCat: 'politics',
    articles: []
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
    event.preventDefault();

fetch("https://newsapi.org/v2/everything?q=" + `${this.state.searchCat}` + "&apiKey=" + apiKey)
.then(response => response.json())
  .then(posts => this.setState({posts: posts.articles})).then(console.log(this.state.posts));
}


componentDidMount() {
fetch("https://newsapi.org/v2/everything?q=" + `${this.state.searchCat}` + "&apiKey=" + apiKey)
.then(response => response.json())
.then(posts => this.setState({posts: posts.articles}));
}


render() {
  return(
    <div className='searchable-posts'>

     <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.searchCat} onChange={this.handleChange} />
        <input type='submit' value="Submit" />
      </form>
 <PostList posts={this.state.posts} />
      </div>
  )
}

} //End of Class
