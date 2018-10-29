import React from 'react';
import {Redirect} from 'react-router-dom';
import Search from "../search/search_container";
import "./nav.css";
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    redirectToHomepage() {
        this.props.history.push('/');
    }

    render() {
        return (
          <div className="home-logo-comp">
            <Link to="/">
              <img
                onClick={() => this.props.history.push("/")}
                src={require("../../images/header/balloons.jpg")}
                className="user-icon-div"
                onClick={this.toggleUserOptions}
              />
            </Link>
            <div className="nav-search">
          <i className="fas fa-search search-icon" />
          {/* <input type="text" className="search-input" placeholder="Search" /> */}
          <Search className="search-input" />
            </div>
      </div>
    );
  }
}

export default HomePage;
