import React from "react";
import { HomePage, LoginPage, RegisterPage } from "./components/Page";
import Page404 from "./components/Page/Page404";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
// Style imports
import "./fonts/A Goblin Appears.otf";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: 0,
    };
  }

  render() {
    return (
      <Router>
        {/* Header goes here */}
        <Header />
        {/* Controls the actual routing section */}
        <body>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/about">
              {/* TODO: Change this link */}
              <HomePage />
            </Route>
            <Route path="/contact">
              {/* TODO: Change this link */}
              <HomePage />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </body>

        <Footer />
      </Router>
    );
  }
}

// Testing testing ddddd

export default App;
