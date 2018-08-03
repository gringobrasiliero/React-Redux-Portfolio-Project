import React, { Component } from 'react';
import voteReducer from '../reducers/index'
import { store }from '../createStore'

export default class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upvote: 0,
      downvote: 0,
      score: 0
    };
  }

handleUpvote = () => {

// voteReducer(this, {type: 'UP_VOTE'})
store.dispatch({type: 'UP_VOTE'})
}

handleDownvote = () => {
  this.setState({
    upvotes: this.state.upvote -= 1,
    score: this.state.score -=1
  }, () => this.state.downvote)
}


  componentDidMount() {
    this.fetchVotes()
  }
  fetchVotes = () => {
    fetch('/votes')
      .then(response => response.json())
      .then(votes => this.setState({votes}))
  }

render() {
  return(
<div id="votes">

<button onClick={this.handleUpvote} bsstyle="primary" bssize="large">
     Up Vote {store.getState().upvote}
   </button>
   <button  bsstyle="primary" bssize="large">
        {this.state.score}
      </button>

   <button onClick={this.handleDownvote} bsstyle="primary" bssize="large">
     Down Vote {this.state.downvote}
   </button>


</div>
  );
}


}
