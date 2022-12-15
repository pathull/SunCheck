import './Register.css';
import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstname, lastname, email, password } = this.state;
    console.log(firstname, lastname, email, password);
    fetch('http://localhost:3001/register', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userRegister');
      });
  }

  render() {
    return (
      <div className="background">
        <form className="form-contains" onSubmit={this.handleSubmit}>
          <h3 className="form-top-title">Register</h3>

          <div className="section">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(event) => this.setState({ firstname: event.target.value })}
            />
          </div>

          <div className="section">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lname"
              onChange={(event) => this.setState({ lastname: event.target.value })}
            />
          </div>

          <div className="section">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </div>

          <div className="section">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={(event) => this.setState({ password: event.target.value })}
            />
          </div>

          <div className="sign-up-box">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
      </div>
    );
  }
}
