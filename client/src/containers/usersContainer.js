import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';





export default class UsersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

  }




  handleChange =(e) => {
    this.setState({
      username: e.target.value,
      password: e.target.value
    })
  }
  handleSubmit(event) {
      event.preventDefault();
  alert("submit")
  // fetch(`https://newsapi.org/v2/everything?q=${this.state.searchCat}&apiKey=${apiKey}`)
  // .then(response => response.json())
  //   .then(articles => this.setState({articles: articles.articles})).then(console.log(this.state.articles));
  }








  componentDidMount() {


  }

  componentWillUnmount() {
      // document.addEventListener('click', this.handleClick, true);
    }


render() {
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" value={this.state.username} onChange={this.handleChange}name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}


}
