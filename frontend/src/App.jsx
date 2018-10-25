import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeLogoContainer from './components/nav/home_logo_container';
import NavBarContainer from "./components/nav/nav_bar_container";
import LeftSidebarModalContainer from './components/chatbox/left_sidebar_modal_container';

import ProfileContainer from './components/profile/profile_container';
import UpdateProfileContainer from './components/profile/update_profile_container';
import ChangeEmailContainer from './components/profile/change_email_container';
import ChangePasswordContainer from './components/profile/change_password_container';
import LeftSidebarContainer from './components/chatbox/left_sidebar_container';
import { Switch, Route } from "react-router-dom";
import ChangePassword from './components/profile/change_password';

import MapContainer from "./components/map/map_container";
import Modal from "./components/session/modal";
import LeftSidebar from './components/chatbox/left_sidebar';

class App extends Component{
  render() {
    return <div>
        <Modal />
        <header className={"header"}>
          <Route path="/" component={HomeLogoContainer} />
          <Route path="/" component={NavBarContainer} />
        </header>
        <Route path="/" component={LeftSidebarContainer} />
        <Route path="/" component={LeftSidebarModalContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/account/update-profile" component={UpdateProfileContainer} />
        <Route exact path="/account/change-email" component={ChangeEmailContainer} />
        <Route exact path='/account/change-password' component={ChangePasswordContainer} />
        <Route path="/" component={MapContainer} />

      </div>;
  }
}

export default App;
