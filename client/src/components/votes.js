import React, { Component } from 'react';

export default class Vote extends Component {
  constructor() {
    super();

    this.state = {

    };
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


</div>
  );
}


}
