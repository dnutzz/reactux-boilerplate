import React from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { user } = this.props;
    if (!user) return;
  }

  render() {
    const { user } = this.props;

    if (!user) return <Redirect to="/login" />;
    return (
      <div>
        Hi {user.email}!
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(Dashboard));
