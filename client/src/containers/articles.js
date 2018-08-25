import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types';

import {newCategory} from '../actions/category-actions'
import {newPost} from '../actions/posts-actions'
import ArticleList from '../components/articles/articleList'
import {fetchArticles} from '../actions/article-actions';
import {fetchCategories} from '../actions/category-actions';
import ArticleBrowsingButtons from '../components/articles/articleBrowsingButtons'
import ArticleSearch from '../components/articles/articleSearch'


class Articles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      page: 1,
      searchCat: 'politics',
    }
  }


  handleNext = (e) => {
    this.setState({page: this.state.page + 1});
    this.props.fetchArticles(this.state.searchCat, this.state.page);
  }

  handleBack = (e) => {
      e.preventDefault();
    this.setState({page: this.state.page - 1});
    this.props.fetchArticles(this.state.searchCat, this.state.page);
  }

  handleChange =(e) => {
    this.setState({
      searchCat: e.target.value,
    })
  };

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

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.articles !== nextProps.articles) {
      console.log("ARTICLES update")
      return true;
    }
    return false;
  }


  render() {
    return(
      <React.Fragment>
        <ArticleSearch onHandleSubmit={this.handleSubmit} onHandleChange={this.handleChange} value={this.state.text} />
        <ArticleBrowsingButtons onHandleNext={this.handleNext} onHandleBack={this.handleBack} />
        <ArticleList articles={this.props.articles} onHandleNeddit={this.handleNeddit} />
      </React.Fragment>
    )
  }


} //End of Class


Articles.defaultProps = {
  title: 'Untitled',
  description: 'No Description',
  url: '',
  urlToImage: 'https://laracasts.com/images/series/circles/do-you-react.png',
}

Articles.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string
}

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
