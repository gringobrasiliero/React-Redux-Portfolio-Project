import React from 'react'
import { Link } from 'react-router-dom';

const Post = (props) => (
  <div className="article" key={props.id}>
  <section>

  <img  src={props.urlToImage ? props.urlToImage : 'https://laracasts.com/images/series/circles/do-you-react.png'} alt={props.title} />


      <div className="content">
        <h2> <a href={props.url} target="_blank">{props.title}</a></h2>
        <p> {props.description}</p>
        <Link to={`/posts/${props.id}`}>Comments</Link>
      </div>

    </section>
    <br />
    <br />
  </div>
)

export default Post;
