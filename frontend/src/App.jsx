import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HomeLogoContainer from './components/nav/home_logo_container';
import NavBarContainer from "./components/nav/nav_bar_container";

import ChatRoomContainer from "./components/chat/chat_room_container";
import MessageListener from "./components/chat/message_listener";

import { Switch, Route } from "react-router-dom";
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
          <Route path="/party/:partyId" component={ChatRoomContainer} /> 
        </main>
      </div>;
  }
}

export default App;
