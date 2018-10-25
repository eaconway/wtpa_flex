import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOptions: "hidden"
    };
    this.toggleUserOptions = this.toggleUserOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleUserOptions(e) {
    e.preventDefault();
    if (this.state.userOptions === "hidden") {
      this.setState({ userOptions: "" });
    } else {
      this.setState({ userOptions: "hidden" });
    }
  }

  handleClick(field) {
    this.setState({ userOptions: "hidden" });

    console.log(`userOptions state is ${this.state.userOptions}`);
    if (field === "logout") {
      this.props.logout();
    } else {
      this.props.openModal(field);
    }
  }

  render() {
    let userOptions =
      this.props.currentUser.id === undefined ? (
        <div className={`${this.state.userOptions} user-options`}>
          <div onClick={() => this.handleClick("login")} className={"nav-link"}>
            Login
          </div>
          <div
            onClick={() => this.handleClick("signup")}
            className={"nav-link"}
          >
            Signup
          </div>
        </div>
      ) : (
        <div className={`${this.state.userOptions} user-options`}>
          <div
            onClick={() => this.handleClick("logout")}
            className={"nav-link"}
          >
            Logout
          </div>
        </div>
      );

    return (
      <ul className="nav-bar-list">
        <div className="user-icon-div">
          <i
            className="far fa-user-circle user-icon"
            onClick={this.toggleUserOptions}
          />
        </div>
        {userOptions}
      </ul>
    );
  }
}

export default NavBar;
