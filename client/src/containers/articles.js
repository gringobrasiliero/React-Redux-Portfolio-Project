import React, { Component } from 'react';
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

class Articles extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchCat: 'politics',
      title: '',
      description: '',
      url: '',
      urlToImage: '',

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  searchArticles = (e) => {
    e.preventDefault();
  }

  handleChange =(e) => {
    this.setState({
      searchCat: e.target.value,
    })
  }

// handleFormChange = (e) => {
//   this.setState){
//
//   }
// }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchArticles(`https://newsapi.org/v2/everything?q=${this.state.searchCat}&apiKey=${apiKey}`);
  }

  handleNeddit = (e) => {
    e.preventDefault();
    this.props.newCategory("/categories", {category: this.state.searchCat});
    this.props.newPost("/posts", {title: this.state.title, description: this.state.description, url: this.state.url, urlToImage: this.state.urlToImage});
    alert("Neddit");
  }

  componentDidMount() {
    this.props.fetchArticles(`https://newsapi.org/v2/everything?q=${this.state.searchCat}&apiKey=${apiKey}`);
  }

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
    articles: state.articles,

  }
}

function mapDispatchToProps(dispatch) {
  console.log("Mapped dispatch to props")
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch),
    newCategory: bindActionCreators(newCategory, dispatch),
    newPost: bindActionCreators(newPost, dispatch),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
