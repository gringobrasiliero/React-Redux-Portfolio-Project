import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {newCategory} from '../actions/category-actions'
import {newPost} from '../actions/posts-actions'
import ArticleList from '../components/articles/articleList'
import Article from '../components/articles/article'
import {fetchArticles} from '../actions/article-actions';
import {fetchCategories} from '../actions/category-actions';
import _ from 'lodash';



const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_SECRET_KEY);
const apiKey = process.env.REACT_APP_NEWS_SECRET_KEY

class Articles extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
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
  };



  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchArticles(`https://newsapi.org/v2/everything?q=${this.state.searchCat}&apiKey=${apiKey}`);
  }

  handleNeddit = (e) => {
    e.preventDefault();
    this.props.newCategory("/categories", {category: this.state.searchCat});
    const category = this.props.categories.find(category => category.category == this.state.searchCat);
    const theId = category.id;
    // let theId = (this.state.searchCat);
alert(theId);
    this.props.newPost("/posts", { category_id: theId, title: e.target.children[0].value, description: e.target.children[1].value, url: e.target.children[2].value, urlToImage: e.target.children[3].value});
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


const mapStateToProps = (state, ownProps) => {
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
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
