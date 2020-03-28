import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import ReceivedMailBox from "./components/ReceivedMailBox";
import SentMailBox from "./components/SentMailBox";
import NotFound from "./components/NotFound";
import { PrivateRoute } from "./controls/SecureRoutes";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute
                  exact
                  path="/mailbox"
                  component={ReceivedMailBox}
                />
                <PrivateRoute exact path="/mailsent" component={SentMailBox} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
