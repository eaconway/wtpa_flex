import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HomeLogoContainer from './components/nav/home_logo_container';
import NavBarContainer from "./components/nav/nav_bar_container";

import ChatRoomContainer from "./components/chat/chat_room_container";
import MessageListener from "./components/chat/message_listener";

import ProfileContainer from './components/profile/profile_container';
import UpdateProfileContainer from './components/profile/update_profile_container';
import ChangeEmailContainer from './components/profile/change_email_container';
import ChangePasswordContainer from './components/profile/change_password_container';
import { Switch, Route } from "react-router-dom";
import ChangePassword from './components/profile/change_password';

import MapContainer from "./components/map/map_container";
import Modal from "./components/session/modal";

import { Link } from "react-router-dom";

class App extends Component{
  render() {
    return <div>
        <Modal />
        <header className={"header"}>
          <Route path="/" component={HomeLogoContainer} />
          <Route path="/" component={NavBarContainer} />
        </header>
        
        <main className='main-section'>
          <Link to='/party/5bcf6482ffb3ee129aef1e23'>Switch to party page</Link>
          <Link to='/'>Back to home</Link>

          
          <Route exact path="/profile" component={ProfileContainer} />
          <Route exact path="/account/update-profile" component={UpdateProfileContainer} />
          <Route exact path="/account/change-email" component={ChangeEmailContainer} />
          <Route exact path='/account/change-password' component={ChangePasswordContainer} />
          <Switch>
            <Route path="/party/:partyId" component={ChatRoomContainer} /> 
            <Route path="/" component={MapContainer} />

          </Switch>
        </main>


      </div>;
  }
}

export default App;
