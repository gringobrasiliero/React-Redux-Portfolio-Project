export const FETCH_ARTICLES = 'FETCH_ARTICLES';
const NewsAPI = require('newsapi');

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
