import React from 'react'
import Vote from './votes';
import { connect } from 'react-redux';

const Post = ({ id, title, description, url, publishedAt, urlToImage, category_id}) => (
  <div className="post" key={id}>
<img src={urlToImage} alt="" />
  <section>

  <div className="content">
            <h2> <a href={url}>{title}</a></h2>
          <p> {description}</p>
<h1>{category_id}</h1>
                </div>


  </section>
    <Vote  />
  <br />
    <br />
      </div>
)
const mapStateToProps = (state) => {
  return {posts: state.posts}
}
export default connect(mapStateToProps)(Post);
