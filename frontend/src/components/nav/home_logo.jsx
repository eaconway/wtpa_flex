import React from 'react';
import {Redirect} from 'react-router-dom';
import Search from "../search/search_container";
import "./nav.css";

class HomePage extends React.Component {
    redirectToHomepage() {
        this.props.history.push('/');
    }

    render () {
        return (
        <div className='home-logo-comp'>
            <img onClick={() => this.redirectToHomepage()} src={require('../../images/header/balloons.jpg')}
          className='user-icon-div' onClick={this.toggleUserOptions}/>
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
