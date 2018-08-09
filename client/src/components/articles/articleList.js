import React from 'react'
import Article from './article'



export const ArticleList = ({ articles, index }) => (
  <div className="article-list">
    {articles.map(article =>  <Article  key={article.url} id={article.id}  title={article.title} description={article.description} url={article.url} publishedAt={article.publishedAt} urlToImage={article.urlToImage} />) }
  </div>
)
export default ArticleList
