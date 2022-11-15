import './Login.css'
import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password)
    fetch('http://localhost:3001/login', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',

      },
      body: JSON.stringify({
        email,
        password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userRegister')
      })
  }

  render() {
    return (
      <div className='background'>
        <span className='info-login'>Approximately 1 billion people worldwide are affected with vitamin-D deficiency and around 50% of the global population have vitamin D insufficiency</span>
        <form className='form-contains' onSubmit={this.handleSubmit}>
          <h3 className='form-top-title'>Sign In</h3>

          <div className="section">

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="section">

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="seciton">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="sign-up-box">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Need to <a href="/register" className='link-tag'>register?</a>
          </p>
        </form >
      </div>
    )
  }
}

