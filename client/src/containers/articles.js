import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleList from '../components/articles/articleList'
import ArticleBrowsingButtons from '../components/articles/articleBrowsingButtons'
import ArticleSearch from '../components/articles/articleSearch'
import {bindActionCreators} from 'redux'
import {newCategory} from '../actions/category-actions'
import {newPost} from '../actions/posts-actions'
import {fetchArticles} from '../actions/article-actions';
import {fetchCategories} from '../actions/category-actions';
import moment from 'moment';


class Articles extends Component {
  constructor(props) {
    super(props)
    let date = moment()
    let prevDate = date.subtract(30, 'days').calendar();
    this.state = {
      categories: [],
      page: 1,
      searchCat: 'Politics',
      date: date,
      prevDate: prevDate
    }
  }


  handleNext = (e) => {
    this.props.fetchArticles(this.state.searchCat, this.state.page+1, this.state.prevDate, this.state.date);
    this.setState({page: this.state.page + 1});
  }

  handleBack = (e) => {
    this.props.fetchArticles(this.state.searchCat, this.state.page-1, this.state.prevDate, this.state.date);
    this.setState({page: this.state.page - 1});
  }

  handleChange =(e) => {
    this.setState({
      searchCat: e.target.value,
    })
  };

  toTitleCase = (str) =>{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }
    return str.join(' ');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let categoryInput = this.toTitleCase(this.state.searchCat);
    let cat = categoryInput.charAt(0).toUpperCase() + categoryInput.slice(1)
    this.props.newCategory("/categories", {category: categoryInput});
    this.props.fetchArticles(categoryInput, this.state.page, this.state.prevDate, this.state.date);
    }

  handleNeddit = (e) => {
    e.preventDefault();
    alert("This article has been saved!")
    let categoryInput = this.toTitleCase(this.state.searchCat);
    const category = this.props.categories.find(category => category.category === categoryInput);
    let theId = category.id;
    this.props.newPost("/posts", { category_id: theId, title: e.target.children[0].value, description: e.target.children[1].value, url: e.target.children[2].value, urlToImage: e.target.children[3].value});
  }

  componentDidMount() {
    this.props.fetchArticles(this.state.searchCat, this.state.page, this.state.prevDate, this.state.date);

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
