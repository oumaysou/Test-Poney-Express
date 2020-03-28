import React, { Component } from "react";
import jwtDecode from "jwt-decode";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: ""
    };
  }
  componentWillMount() {
    if (!localStorage.usertoken) return this.props.history.push(`/login`);
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    if (decoded) {
      this.setState({
        first_name: decoded.firstName,
        last_name: decoded.lastName
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
            <h2 className="text-center">
              {this.state.first_name} {this.state.last_name}
            </h2>
            <p className="text-center">
              Choose MAILBOX to ckeck your emails or MAILSENT to see email you
              SENT.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
