import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/common/Navbar";

import { fetchUser } from "./redux/actions/authActions";


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Redirect to="/dashboard" />}
          />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
