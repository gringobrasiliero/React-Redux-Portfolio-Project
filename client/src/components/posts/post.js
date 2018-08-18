import React from 'react'
import { Link } from 'react-router-dom';

const Post = (props) => (
  <div className="post" key={props.id}>
    <img src={props.urlToImage} alt="" />
    <section>

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
