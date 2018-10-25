import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HomeLogoContainer from './components/nav/home_logo_container';
import NavBarContainer from "./components/nav/nav_bar_container";
import LeftSidebarModalContainer from './components/chatbox/left_sidebar_modal_container';

import ChatRoomContainer from "./components/chat/chat_room_container";
import MessageListener from "./components/chat/message_listener";

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

import { Link } from "react-router-dom";

class App extends Component{
  render() {
    return <div>
        <Modal />
        <header className={"header"}>
        </header>
        <div className='main-header-inner'>
            <Route path="/" component={HomeLogoContainer} />
            <Route path="/" component={NavBarContainer} />
        </div>
        <main className='main-section'>
          <Route exact path="/" component={LeftSidebarContainer} />
          <Route exact path="/" component={LeftSidebarModalContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route exact path="/account/update-profile" component={UpdateProfileContainer} />
          <Route exact path="/account/change-email" component={ChangeEmailContainer} />
          <Route exact path='/account/change-password' component={ChangePasswordContainer} />
          <Switch>
            <Route path="/party/:partyId" component={ChatRoomContainer} />
            <Route exact path="/" component={MapContainer} />
          </Switch>
        </main>
      </div>;
  }
}

export default App;
