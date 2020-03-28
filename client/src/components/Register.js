import React, { Component } from "react";
import { register } from "./UserFunctions";
import styled from "styled-components";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      raison_social: "",
      account_type: "",
      errors: []
    };
  }
  displayError = () => {
    if (this.state.errors.length) {
      const Err = this.state.errors;
      return Err.map((elem, index) => {
        return <Alert key={index}>{elem}</Alert>;
      });
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      raison_social: this.state.raison_social,
      account_type: this.state.account_type
    };
    register(newUser).then(res => {
      if (!res.error) this.props.history.push(`/login`);
      else this.setState({ errors: res.error });
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  required="required"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  required="required"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required="required"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required="required"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Social Raison</label>
                <input
                  type="text"
                  className="form-control"
                  name="raison_social"
                  placeholder="Enter your social reason"
                  value={this.state.raison_social}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Account type</label>
                <input
                  type="text"
                  className="form-control"
                  name="account_type"
                  placeholder="Enter your account type"
                  value={this.state.account_type}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
            {this.displayError()}
          </div>
        </div>
      </div>
    );
  }
}
const Alert = styled.p`
  font-size: 0.9rem;
  border: 0.1rem solid black;
  margin: 0.5rem auto;
  color: white;
  background-color: red;
  text-align: center;
`;
export default Register;
