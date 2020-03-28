import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { getMessages } from "./UserFunctions";
import MailBox1 from "./MailBox1";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      errors: {},
      messages: {},
      token: false,
      mailbox: []
    };
  }

  componentWillMount() {
    if (!localStorage.usertoken) return this.props.history.push(`/login`);
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    if (decoded) {
      getMessages(decoded.email).then(res => {
        if (!res.error) {
          this.setState({ messages: res });
        }
      });
      this.setState({
        first_name: decoded.firstName,
        last_name: decoded.lastName,
        email: decoded.email,
        token: true
      });
    }
  }

  getAllMessages() {
    const messages = this.state.messages;
    if (messages.length > 0) {
      for (let i in messages) {
        this.state.mailbox.push(messages[i]);
      }
      return this.state.mailbox.map((elem, index) => {
        return <MailBox1 props={elem} key={index} />;
      });
    } else
      return (
        <div className="text-center">
          <p>No Message Received Yet!</p>
        </div>
      );
  }

  render() {
    // console.log("render " + JSON.stringify(this.state.messages));
    if (this.state.token) {
      return (
        <div className="container">
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">MAILBOX</h1>
            </div>
            {this.getAllMessages()}
          </div>
        </div>
      );
    } else return <div>Not Allowed to see this page</div>;
  }
}

export default Profile;
