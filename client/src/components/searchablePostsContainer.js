import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {newCategory} from '../actions/category-actions'
// import Articles from './articles';
// import ArticleLists from './articles';
import Vote from './votes';

const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_SECRET_KEY);
const apiKey = process.env.REACT_APP_NEWS_SECRET_KEY

const Article = ({ id, title, description, url, publishedAt, urlToImage}) => (
  <div className="article" key={url}>
<section className="articleContainer">
<img src={urlToImage} alt="" />
<div className="content">

          <h2> <a href={url}>{title}</a></h2>
        <p> {description}</p>

              </div>

</section>
<br />
      </div>
)

const ArticleList = ({ articles, index }) => (
  <div className="article-list">
{ articles.map(article => <Article key={article.url} id={article.id} title={article.title} description={article.description} url={article.url} publishedAt={article.publishedAt} urlToImage={article.urlToImage} />) }
  </div>
)




 class SearchableArticlesContainer extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    articles: [],
    searchCat: 'politics',

  }
  this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

}

searchArticles = (e) => {
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

    this.props.newCategory("/categories", {category: this.state.searchCat});

fetch(`https://newsapi.org/v2/everything?q=${this.state.searchCat}&apiKey=${apiKey}`)
.then(response => response.json())
  .then(articles => this.setState({articles: articles.articles})).then(console.log(this.state.articles));
}


componentDidMount() {
fetch(`https://newsapi.org/v2/everything?q=${this.state.searchCat}&apiKey=${apiKey}`)
.then(response => response.json())
.then(articles => this.setState({articles: articles.articles}));
}

// <input type='text' value={this.state.searchCat} onChange={this.handleChange} />

render() {
  return(
    <div className='searchable-articles'>

<h3><strong> Search for new Posts </strong>
    <form onSubmit={ (event) => this.handleSubmit(event) }>
        <input type="text" id="catForm" onChange={(event) => this.handleChange(event)} value={this.state.text} />
        <input type='submit' value="Submit" />
      </form>
      </h3>
 <ArticleList articles={this.state.articles} />
      </div>
  )
}


} //End of Class

function mapDispatchToProps(dispatch) {
console.log("Mapped dispatch to props")
  return {
    newCategory: bindActionCreators(newCategory, dispatch),


  }
}




export default connect(null, mapDispatchToProps)(SearchableArticlesContainer);
