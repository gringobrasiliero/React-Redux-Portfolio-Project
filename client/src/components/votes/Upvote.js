import React from 'react'


export default const Vote (props) => (
    <div>
    <button onClick={this.handleUpvote} bsstyle="primary" bssize="large">
         Up Vote {store.state.upvote}
       </button>
       <button  bsstyle="primary" bssize="large">
            {this.state.score}
          </button>

       <button onClick={this.handleDownvote} bsstyle="primary" bssize="large">
         Down Vote {this.state.downvote}
       </button>
<div/>
  )
