import React from 'react'


 let Comment = ({ id, comment, guestName, created_at}) => (
  <div className="comment" key={id}>
    <section className="commentContainer">
      <div className="content">
        <h3>{comment}</h3>
        <p>{guestName} - {created_at}</p>
        <br />
      </div>
    </section>
  </div>
)


export default Comment
