import React, { Component } from 'react';








export default class Vote extends Component {
  constructor() {
    super();

    this.state = {
      upvotes: 0,
      downvotes: 0,
      score: 0
    };
  }

handleUpvote = () => {
  this.setState({
    upvotes: this.state.upvotes += 1,
    score: this.state.score +=1
  }, () => this.state.upvotes)
}

handleDownvote = () => {
  this.setState({
    upvotes: this.state.upvotes -= 1,
    score: this.state.score -=1
  }, () => this.state.downVotes)
}


  componentDidMount() {
    this.fetchVotes()
  }
  fetchVotes = () => {
    fetch('/votes')
      .then(response => response.json())
      .then(votes => console.log(votes));
  }

render() {
  return(
<div id="votes">

<button onClick={this.handleUpvote} bsstyle="primary" bssize="large">
     Up Vote {this.state.upvotes}
   </button>
   <button  bsstyle="primary" bssize="large">
        {this.state.score}
      </button>

   <button onClick={this.handleDownvote} bsstyle="primary" bssize="large">
     Down Vote {this.state.downvotes}
   </button>


</div>
  );
}


}
