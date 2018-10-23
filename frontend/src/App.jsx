import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeLogoContainer from './components/nav/home_logo_container';
import NavBarContainer from "./components/nav/nav_bar_container";
import { Switch, Route } from "react-router-dom";
import Modal from "./components/session/modal";

class App extends Component{
  render() {
    return <div>
        <Modal />
        <header className={"header"}>
          <Route path="/" component={HomeLogoContainer} />
          <Route path="/" component={NavBarContainer} />
        </header>
      </div>;
  }
}

export default App;
