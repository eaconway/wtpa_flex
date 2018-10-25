import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOptions: "hidden"
    };
    this.toggleUserOptions = this.toggleUserOptions.bind(this);
  }

  toggleUserOptions(e) {
    e.preventDefault();
    if (this.state.userOptions === "hidden") {
      this.setState({ userOptions: "" });
    } else {
      this.setState({ userOptions: "hidden" });
    }
  }

  render() {
    return (
      <ul className="nav-bar-list">
        <div className="user-icon-div">
          <i
            className="far fa-user-circle user-icon"
            onClick={this.toggleUserOptions}
          />
        </div>
        <div className={`${this.state.userOptions} user-options`}>
          <div
            onClick={() => this.props.openModal("login")}
            className={"nav-link"}
          >
            Login
          </div>
          <div
            onClick={() => this.props.openModal("signup")}
            className={"nav-link"}
          >
            Signup
          </div>
        </div>
      </ul>
    );
  }
}

export default NavBar;
