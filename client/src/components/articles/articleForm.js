import React from 'react'


const ArticleForm = ({ onHandleNeddit,  id, title, description, url, publishedAt, urlToImage}) => (

<form onSubmit={onHandleNeddit}>
  <input type="text" id="title" name="title" defaultValue={title}  style={{display: 'none'}}/>
  <input type="text" id="description" name="description" defaultValue={description} style={{display: 'none'}} />
  <input type="text" id="url" name="url"  defaultValue={url} style={{display: 'none'}} />
  <input type="text" name="urlToImage" id="urlToImage"  defaultValue={urlToImage} style={{display: 'none'}} />

  <input type="submit" value="Neddit!" />
</form>
)
export default ArticleForm;
