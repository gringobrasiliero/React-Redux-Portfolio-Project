import React, { Component } from 'react';
import LikesButton from '../components/likes/LikesButton'

class Likes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: null,
      status: 0,
      likes: `${this.props.likes}`}

  }

onHandleClick = (e) => {
  e.preventDefault();

const id = `${this.props.id}`;
const newTotalLikes = parseInt(this.state.likes) + 1;
this.setState({
  likes: newTotalLikes
});
  fetch('/posts/' + `${id}` , {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow", // follows the redirect response
    body: JSON.stringify({
      likes: `${newTotalLikes}`
    }),
 // body data type must match "Content-Type" header
}).then((response) => response.json())
.then((responseJson) => {
  return responseJson.posts;
})
.catch((error) => {
  console.log(error);
})
  }

  render() {
    return(
      <React.Fragment>
      <LikesButton onHandleClick={this.onHandleClick} likes={this.state.likes} />
      </React.Fragment>
    )
  }

} // End of Class

export default Likes;
