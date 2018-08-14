export const FETCH_ARTICLES = 'FETCH_ARTICLES';

const NewsAPI = require('newsapi');

// const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_SECRET_KEY);
// const apiKey = process.env.REACT_APP_NEWS_SECRET_KEY


export const fetchArticles = (url) => {
  return (dispatch) => {
    fetch(url)
    .then(response => response.json())
      .then(articles => {
        dispatch({
        type: FETCH_ARTICLES,
        payload: articles
      })
    })

    }
    }
