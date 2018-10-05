import NewsAPI from '../myNewsApi';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
const apiKey = process.env.REACT_APP_NEWS_SECRET_KEY

const newsapi = new NewsAPI(apiKey);



export const fetchArticles = (category, page, prevDate, date) => {
  return (dispatch) => {
    newsapi.v2.everything({
    q: category,
    language: 'en',
    to: date,
    from: prevDate,
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
