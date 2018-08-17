import React from 'react'

 let Article = ({ id, title, description, url, publishedAt, urlToImage, handleNeddit, handleTitleChange}) => (
  <div className="article" key={url}>
    <section className="articleContainer">
      <img src={urlToImage} alt={title} />
      <div className="content">

        <h2> <a href={url} target="_blank">{title}</a></h2>
        <p> {description}</p>

        <form onSubmit={handleNeddit}>
          <input type="text" id="title" name="title" defaultValue={title} style={{display: 'none'}} />
          <input type="text" id="description" name="description" defaultValue={description} style={{display: 'none'}} />
          <input type="text" id="url" name="url"  defaultValue={url} style={{display: 'none'}} />
          <input type="text" name="urlToImage" id="urlToImage"  defaultValue={urlToImage} style={{display: 'none'}} />

          <input type="submit" value="Neddit!" />
        </form>

      </div>
    </section>
    <br />
  </div>
)

export default Article
