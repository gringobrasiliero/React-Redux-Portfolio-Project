import React from 'react'
import { Field, reduxForm } from 'redux-form'


 let Article = ({ id, title, description, url, publishedAt, urlToImage, handleNeddit}) => (
  <div className="article" key={url}>
    <section className="articleContainer">
      <img src={urlToImage} alt={title} />
      <div className="content">

        <h2> <a href={url}>{title}</a></h2>
        <p> {description}</p>

      </div>

      <form onSubmit={handleNeddit}>
        <input type="text" id="title" name="title" onChange={(e) => this.handleTitleChange(e)} value={title} style={{display: 'none'}} />
        <input type="text" id="url" name="url" onChange={(e) => this.handleChange(e)} value={url} style={{display: 'none'}} />
        <input type="text" name="urlToImage" id="urlToImage" onChange={(e) => this.handleChange(e)} value={urlToImage} style={{display: 'none'}} />
        <input type="text" id="description" name="description" onChange={(e) => this.handleChange(e)} value={description} style={{display: 'none'}} />
        <input type="submit" value="Submit" />

      </form>

    </section>
    <br />
  </div>
)

Article = reduxForm({
  // a unique name for the form
  form: 'contact'
})(Article)

export default Article
