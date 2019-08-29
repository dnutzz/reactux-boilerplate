import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const NavbarWrapper = styled.div`
  top: 0;
  position: sticky;
  flex-grow: 1;
  display: block;
  z-index: 1000;
`;

const NavLink = styled.div`
  padding: 10px;
  display: inline-flex;
`;

class Navbar extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <NavbarWrapper>
        <NavLink>
            <Link to="/">Home</Link>
        </NavLink>
        {!user && (
          <NavLink>
              <Link to="/login">Login</Link>
          </NavLink>
        )}
      </NavbarWrapper>
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
)(withRouter(Navbar));
