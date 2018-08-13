import React from 'react'
import { Field, reduxForm } from 'redux-form'


 let Article = ({ id, title, description, url, publishedAt, urlToImage, handleNeddit, handleTitleChange}) => (
  <div className="article" key={url}>
    <section className="articleContainer">
      <img src={urlToImage} alt={title} />
      <div className="content">

        <h2> <a href={url}>{title}</a></h2>
        <p> {description}</p>

      </div>

      <form onSubmit={handleNeddit}>
        <input type="text" id="title" name="title" defaultValue={title} style={{display: 'none'}} />
        <input type="text" id="description" name="description" defaultValue={description} style={{display: 'none'}} />
        <input type="text" id="url" name="url"  defaultValue={url} style={{display: 'none'}} />
        <input type="text" name="urlToImage" id="urlToImage"  defaultValue={urlToImage} style={{display: 'none'}} />
        <input type="submit" value="Submit" />

      </form>

    </section>
    <br />
  </div>
)

Article.defaultProps = {
  title: "",
  description: "",
  url: "",
  urlToImage: "",

}
export default Article