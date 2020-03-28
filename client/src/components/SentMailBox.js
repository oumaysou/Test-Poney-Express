import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { getMessagesSent } from "./UserFunctions";
import MailBox2 from "./MailBox2";

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
      getMessagesSent(decoded.email).then(res => {
        this.setState({ messages: res });
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
        return <MailBox2 props={elem} key={index} />;
      });
    } else
      return (
        <div className="text-center">
          <p>No Message Sent Yet!</p>
        </div>
      );
  }

  render() {
    if (this.state.token) {
      return (
        <div className="container">
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">MAIL SENT</h1>
            </div>
            {this.getAllMessages()}
          </div>
        </div>
      );
    } else return <div>Not Allowed to see this page</div>;
  }
}

export default Profile;
