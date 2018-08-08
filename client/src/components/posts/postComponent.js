import React from 'react'
// import Vote from '../votes';


const Post = (props) => (
  <div className="post" key={props.id}>
<img src={props.urlToImage} alt="" />
  <section>

  <div className="content">
            <h2> <a href={props.url}>{props.title}</a></h2>
          <p> {props.description}</p>
<h1>{props.category_id}</h1>
                </div>


  </section>
  <br />
    <br />
      </div>
)
export default Post;
