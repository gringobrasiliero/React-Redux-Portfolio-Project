import React from 'react'


 let Comment = ({ id, comment, created_at}) => (
  <div className="comment" key={id}>
    <section className="commentContainer">
      <div className="content">
        <h2>{comment}</h2>
        <p>{created_at}</p>
        <br />
      </div>
    </section>
  </div>
)


export default Comment
