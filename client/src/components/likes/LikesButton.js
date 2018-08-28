import React from 'react'

const LikesButton = (props) => (
  <div>
    <button onClick={props.onHandleClick}>Like</button>
    <p>Number of likes: {props.likes}</p>
  </div>
)

export default LikesButton
