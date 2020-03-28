import React, { useState } from "react";
import styled from "styled-components";

const Mailbox1 = props => {
  const [Display, setDiplay] = useState(true);
  var date = new Date(props.props[0].createdAt);
  date = new Date(date.setDate(date.getDate() + 7));
  date = date.toDateString();
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

              <td>
                {props.props[0].status === "opened" && props.props[1].firstName}
                {props.props[0].status !== "opened" && "Poney Express"}
              </td>
            </tr>
            <tr>
              <td>Last Name of Sender</td>
              <td>
                {props.props[0].status === "opened" && props.props[1].lastName}
                {props.props[0].status !== "opened" && "Poney Express"}
              </td>
            </tr>
            <tr>
              <td>Email of Sender</td>
              <td>
                {props.props[0].status === "opened" &&
                  props.props[0].senderEmail}
                {props.props[0].status !== "opened" && "Poney Express"}
              </td>
            </tr>
            <tr>
              <td>Sent Date</td>
              <td>{props.props[0].createdAt}</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>
                {props.props[0].status === "opened" && props.props[0].object}
                {props.props[0].status !== "opened" && "Poney Express"}
              </td>
            </tr>
            <tr>
              {props.props[0].status !== "opened" && <td>Expiration Date</td>}
              {props.props[0].status !== "opened" && <td>{date}</td>}
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

              <td>
                {props.props[0].status === "opened" && props.props[1].firstName}
                {props.props[0].status !== "opened" && "Poney Express"}
              </td>
            </tr>
            <tr>
              <td>Last Name of Sender</td>
              <td>
                {props.props[0].status === "opened" && props.props[1].lastName}
                {props.props[0].status !== "opened" && "Poney Express"}
              </td>
            </tr>
            <tr>
              <td>Email of Sender</td>
              <td>
                {props.props[0].status === "opened" &&
                  props.props[0].senderEmail}
                {props.props[0].status !== "opened" && "Poney Express"}
              </td>
            </tr>
            <tr>
              <td>Sent Date</td>
              <td>{props.props[0].createdAt}</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>
                {props.props[0].status === "opened" && props.props[0].object}
                {props.props[0].status !== "opened" && "Poney Express"}
              </td>
            </tr>
            <tr>
              {props.props[0].status !== "opened" && <td>Expiration Date</td>}
              {props.props[0].status !== "opened" && <td>{date}</td>}
            </tr>
            <tr>
              <td>Content</td>
              <td>
                {props.props[0].status === "opened" && props.props[0].content}
                {props.props[0].status !== "opened" && "Poney Express"}
              </td>
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
export default Mailbox1;
