import React, { Component } from "react";
import TokenService from "../Services/token-service";

export const LoginContext = React.createContext({
  nickname: "",
  loggedIn: false,
  error: null,
  registered: false,
  handleLoginState: () => {},
});

export default LoginContext;

export class LoginProvider extends Component {
  state = {
    loggedIn: TokenService.hasAuthToken(),
    registered: TokenService.hasAuthToken(),
    error: null,
  };

  saveNickname = (nickname) => {
    this.setState({ nickname });
  };

  handleLoginState = (isLoggedIn) => {
    this.setState({
      loggedIn: isLoggedIn,
    });
  };

  handleRegisteredState = (isRegistered) => {
    this.setState({
      registered: isRegistered,
    });
  };
  render() {
    const value = {
      nickname: this.state.nickname,
      loggedIn: this.state.loggedIn,
      registered: this.state.registered,
      error: this.state.error,
      handleLoginState: this.handleLoginState,
      handleRegisteredState: this.handleRegisteredState,
      saveNickname: this.saveNickname,
    };
    return (
      <LoginContext.Provider value={value}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}
