import React from 'react'


 let Comment = ({ id, comment, guestName, guestLocation, created_at}) => (
  <div className="comment" key={id}>
    <section className="commentContainer">
      <div className="content">
        <h3>{comment}</h3>
        <p>{guestName} - {guestLocation} - {created_at}</p>
        <br />
      </div>
    </section>
  </div>
)


export default Comment
