import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../redux/actions/authActions";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { user } = this.props;
    if (user) return <Redirect to="/" />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.props.authError && <p>Login fehlgeschlagen</p>}
          <input
            id="email"
            name="email"
            onChange={this.handleChange}
            autoComplete="email"
            autoFocus
          />
          <input
            name="password"
            type="password"
            id="password"
            onChange={this.handleChange}
            autoComplete="current-password"
          />
          <button type="submit" variant="contained" color="primary">
            Anmelden
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.authReducer.authError,
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
