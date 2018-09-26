import React from 'react'

const LikesButton = (props) => (
  <div id="likes">
    <p><button onClick={props.onHandleClick}>Like</button>
 Number of Likes: {props.likes}</p>
  </div>
)

export default LikesButton
