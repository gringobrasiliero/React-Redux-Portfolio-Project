import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {newCategory} from '../actions/category-actions'
import {newPost} from '../actions/posts-actions'
import ArticleList from '../components/articles/articleList'
import {fetchArticles} from '../actions/article-actions';
import {fetchCategories} from '../actions/category-actions';

const apiKey = process.env.REACT_APP_NEWS_SECRET_KEY

class Articles extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      page: 1,
      searchCat: 'politics',
      title: '',
      description: '',
      url: '',
      urlToImage: 'https://laracasts.com/images/series/circles/do-you-react.png',

    }


  }

  searchArticles = (e) => {
    e.preventDefault();
  }

  handleChange =(e) => {
    this.setState({
      searchCat: e.target.value,
    })
  };

handleNext = (e) => {
  this.setState({page: this.state.page + 1});
  this.props.fetchArticles(this.state.searchCat, this.state.page);
}

handleBack = (e) => {
  this.setState({page: this.state.page - 1});
  this.props.fetchArticles(this.state.searchCat, this.state.page);
}


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newCategory("/categories", {category: this.state.searchCat});
    this.props.fetchArticles(this.state.searchCat, this.state.page);
  }

  handleNeddit = (e) => {
    e.preventDefault();
    alert("This article has been saved!")
    const category = this.props.categories.find(category => category.category === this.state.searchCat);
    const theId = category.id;
    this.props.newPost("/posts", { category_id: theId, title: e.target.children[0].value, description: e.target.children[1].value, url: e.target.children[2].value, urlToImage: e.target.children[3].value});
  }

  componentDidMount() {
    this.props.fetchArticles(this.state.searchCat, this.state.page);
  }

  render() {
    return(
      <div className='searchable-articles'>
        <h3><strong> Search for new Posts </strong>
          <form onSubmit={ (e) => this.handleSubmit(e) }>
            <input type="text" id="catForm" onChange={(e) => this.handleChange(e)} value={this.state.text} />
            <input type='submit' value="Submit" />
          </form>
          <button onClick={ (e) => this.handleBack(e)}>Back</button>
          <button onClick={ (e) => this.handleNext(e)}>Next</button>
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

const mapDispatchToProps = (dispatch) => {
  console.log("Mapped dispatch to props")
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch),
    newCategory: bindActionCreators(newCategory, dispatch),
    newPost: bindActionCreators(newPost, dispatch),
    fetchCategories: bindActionCreators(fetchCategories, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
