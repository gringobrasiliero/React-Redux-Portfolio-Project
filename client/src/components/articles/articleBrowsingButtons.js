import React from 'react'

let ArticleBrowsingButtons = ({ onHandleBack, onHandleNext}) => (
  <div>
    <button onClick={onHandleBack}>Back</button>
    <button onClick={onHandleNext}>Next</button>
  </div>
)

export default ArticleBrowsingButtons
