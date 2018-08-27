import React from 'react'
import ArticleForm from './articleForm'
 let Article = ({ id, title, description, url, publishedAt, urlToImage, handleNeddit}) => (
  <div className="article" key={url}>
    <section className="articleContainer">
      <img  src={urlToImage ? urlToImage : 'https://laracasts.com/images/series/circles/do-you-react.png'} alt={title} />
      <div className="content">

        <h2> <a href={url} target="_blank">{title}</a></h2>
        <p> {description}</p>

        <ArticleForm id={id} title={title} description={description} url={url} publishedAt={publishedAt} urlToImage={urlToImage} onHandleNeddit={handleNeddit}/>

      </div>
    </section>
    <br />
  </div>
)

export default Article
