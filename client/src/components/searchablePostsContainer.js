import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {newCategory} from '../actions/category-actions'
import {newPost} from '../actions/posts-actions'
import ArticleList from '../components/articles/articleList'
import Article from '../components/articles/article'
import {fetchArticles} from '../actions/article-actions';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_SECRET_KEY);
const apiKey = process.env.REACT_APP_NEWS_SECRET_KEY




 class SearchableArticlesContainer extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    articles: [],
    searchCat: 'politics',
    title: '',
    description: '',
    url: '',
    urlToImage: '',

  }

}

searchArticles = (e) => {
  e.preventDefault();

//   newsapi.v2.topHeadlines({
//   category: `${this.state.searchCat}`,
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//
// });
}

handleChange =(e) => {
  this.setState({
    searchCat: e.target.value,


  })
}


handleSubmit = (e) => {
    e.preventDefault();

// fetch(`https://newsapi.org/v2/everything?q=${this.state.searchCat}&apiKey=${apiKey}`)
// .then(response => response.json())
//   .then(articles => this.setState({articles: articles.articles})).then(console.log(this.state.articles));
}

handleNeddit = (e) => {
    e.preventDefault();

    this.props.newCategory("/categories", {category: this.state.searchCat});
    debugger
    this.props.newPost("/posts", {title: this.state.title, description: this.state.description, url: this.state.url, urlToImage: this.state.urlToImage});

    alert("Neddit");
}



componentDidMount() {
  this.props.fetchArticles(`https://newsapi.org/v2/everything?q=${this.state.searchCat}&apiKey=${apiKey}`);

// fetch(`https://newsapi.org/v2/everything?q=${this.state.searchCat}&apiKey=${apiKey}`)
// .then(response => response.json())
// .then(articles => this.setState({articles: articles.articles}));
}

// <input type='text' value={this.state.searchCat} onChange={this.handleChange} />

render() {
  return(
    <div className='searchable-articles'>

<h3><strong> Search for new Posts </strong>
    <form onSubmit={ (e) => this.handleSubmit(e) }>
        <input type="text" id="catForm" onChange={(e) => this.handleChange(e)} value={this.state.text} />
        <input type='submit' value="Submit" />
      </form>
      </h3>
 <ArticleList articles={this.props.articles} onHandleNeddit={this.handleNeddit}  />
      </div>
  )
}


} //End of Class


const mapStateToProps = (state) => {
  console.log('in map state to props')
return{
  categories: state.categories,
  posts: state.posts,
  articles: state.articles
  // users: state.users,
  // votes: state.votes,
}
}


function mapDispatchToProps(dispatch) {
console.log("Mapped dispatch to props")
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch),


  }
}




export default connect(mapStateToProps, mapDispatchToProps)(SearchableArticlesContainer);
