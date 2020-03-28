import React, { useState } from "react";
import styled from "styled-components";

const Mailbox = props => {
  const [Display, setDiplay] = useState(true);
  const onClick = props => {
    setDiplay(!Display);
  };
  if (Display) {
    return (
      <MessageBox1 onClick={() => onClick(props)}>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>Fist Name of Sender</td>
              <td>{props.props[1].firstName}</td>
            </tr>
            <tr>
              <td>Last Name of Sender</td>
              <td>{props.props[1].lastName}</td>
            </tr>
            <tr>
              <td>Email of Recipient</td>
              <td>{props.props[0].recipientEmail}</td>
            </tr>
            <tr>
              <td>Sent Date</td>
              <td>{props.props[0].createdAt}</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>{props.props[0].object}</td>
            </tr>
          </tbody>
        </table>
      </MessageBox1>
    );
  } else
    return (
      <MessageBox2 onClick={() => onClick(props)}>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>Fist Name of Sender</td>
              <td>{props.props[1].firstName}</td>
            </tr>
            <tr>
              <td>Last Name of Sender</td>
              <td>{props.props[1].lastName}</td>
            </tr>
            <tr>
              <td>Email of Recipient</td>
              <td>{props.props[0].recipientEmail}</td>
            </tr>
            <tr>
              <td>Sent Date</td>
              <td>{props.props[0].createdAt}</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>{props.props[0].object}</td>
            </tr>
            <tr>
              <td>Content</td>
              <td>{props.props[0].content}</td>
            </tr>
          </tbody>
        </table>
      </MessageBox2>
    );
};

const MessageBox1 = styled.div`
  margin-bottom: 1rem;
  border: 0.1rem solid #809fff;
  font-weight: bold;
  color: #000000;
  background-color: #0033cc;
`;

const MessageBox2 = styled.div`
  margin-bottom: 1rem;
  border: 0.1rem solid #0000ff;
  font-weight: bold;
  color: white;
  background-color: #000000;
`;

export default Mailbox;
