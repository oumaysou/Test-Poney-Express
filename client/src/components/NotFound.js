import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">OUPS! No Page Founded!</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
