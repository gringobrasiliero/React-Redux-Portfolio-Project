import React from 'react'


 let Comment = ({ id, comment, created_at}) => (
  <div className="comment" key={id}>
    <section className="commentContainer">
      <div className="content">
      <h2>{comment}</h2>
      <h2>{created_at}</h2>

      </div>

    </section>
    <br />
  </div>
)


export default Comment
