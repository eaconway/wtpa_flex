import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOptions: "hidden",
      greenBackground: ""
    };
    this.toggleUserOptions = this.toggleUserOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  toggleUserOptions(e) {
    e.preventDefault();
    if (this.state.userOptions === "hidden") {
      this.setState({ greenBackground: "green-background", userOptions: "" });
    } else {
      this.setState({ greenBackground: "", userOptions: "hidden" });
    }
  }

  handleClick(field) {
    this.setState({ userOptions: "hidden" });

    console.log(`userOptions state is ${this.state.userOptions}`);
    if (field === "logout") {
      this.props.logout();
      this.setState({ greenBackground: "" });
      this.props.history.push("/");
      window.location.reload();
    } else if (field === "profile") {
      this.props.history.push("/profile");
    } else {
      this.props.openModal(field);
    }
  }

  render() {
    let usersEmail = "";
    if (this.props.user != null) {
      usersEmail = (
        <div className={"nav-link green-background bold white-font"}>
          {this.props.user.email}
        </div>
      );
    } else {
      usersEmail = <div />;
    }
    let userOptions =
      this.props.currentUser.id === undefined ? (
        ""
      ) : (
        <div className={`${this.state.userOptions} user-options`}>
          {usersEmail}
          <div
            onClick={() => this.props.history.push("/")}
            className={"nav-link"}
          >
            Home
          </div>
          <div
            onClick={() => this.props.history.push("/profile")}
            className={"nav-link"}
          >
            My Profile
          </div>
          <div
            onClick={() => this.props.history.push("/account/update-profile")}
            className={"nav-link"}
          >
            Update Profile
          </div>
          <div
            onClick={() => this.props.history.push("/party/create-party")}
            className={"nav-link"}
          >
            Create Party
          </div>
          <div
            onClick={() => this.props.history.push("/account/change-email")}
            className={"nav-link"}
          >
            Change Email
          </div>
          <div
            onClick={() => this.props.history.push("/account/change-password")}
            className={"nav-link"}
          >
            Change Password
          </div>
          <div className="grey-border" />
          <div
            onClick={() => this.handleClick("logout")}
            className={"nav-link"}
          >
            Logout
          </div>
        </div>
      );

    let options =
      this.props.currentUser.id === undefined ||
      this.props.currentUser.id === null ? (
        <ul className="nav-bar-list">
          <span
            className="register-link-header"
            onClick={() => this.handleClick("signup")}
          >
            Register
          </span>
          <span
            className="login-link-header"
            onClick={() => this.handleClick("login")}
          >
            Log in
          </span>
        </ul>
      ) : (
        <ul className="nav-bar-list">
          <img
            src={require("../../images/header/profile.png")}
            className="user-icon-div"
            onClick={this.toggleUserOptions}
          />
        </ul>
      );

    return (
      <div className={`nav-bar-container ${this.state.greenBackground}`}>
        {options}
        {userOptions}
      </div>
    );
  }
}

export default NavBar;
