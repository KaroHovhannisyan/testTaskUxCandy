import React, {Component} from "react";
import {connect} from "react-redux";
import {ACTIONS} from "../../redux";


class Login extends Component {
  render() {
      const {isLoggedIn, login} = this.props;
      return <div>
          Login {isLoggedIn && "Logged in"}
          <button onClick={login}>Login</button>
      </div>
  }
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
});
const mapDispatchToProps = (dispatch) => ({
   login: () => dispatch(ACTIONS.attemptLogin({}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
