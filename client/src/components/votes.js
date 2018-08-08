import React, { Component } from 'react';
// import voteReducer from '../reducers/index'
import { store } from '../createStore'

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
store.dispatch({type: 'UP_VOTE'})
}

handleDownvote = () => {
  store.dispatch({type: 'DOWN_VOTE'})

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

<Vote  votes={this.props.votes} />
</div>
  );
}


}
