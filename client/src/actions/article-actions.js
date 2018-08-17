export const FETCH_ARTICLES = 'FETCH_ARTICLES';
const NewsAPI = require('newsapi');
const apiKey = process.env.REACT_APP_NEWS_SECRET_KEY

const newsapi = new NewsAPI(apiKey);



export const fetchArticles = (category, page) => {
  return (dispatch) => {
    newsapi.v2.everything({
    q: category,
    language: 'en',
    to: '2018-12-12',
    from: '2010-12-12',
    page: page,
    pageSize: 10,
    sortBy: 'publishedAt',
  })

      .then(articles => {
        dispatch({
          type: FETCH_ARTICLES,
          payload: articles
        })
      })

  }
}















// export const fetchArticles = (url) => {
//   return (dispatch) => {
//     fetch(url)
//     .then(response => response.json())
//       .then(articles => {
//         dispatch({
//           type: FETCH_ARTICLES,
//           payload: articles
//         })
//       })
//
//   }
// }
