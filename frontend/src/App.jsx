import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeLogoContainer from './components/nav/home_logo_container';
import NavBarContainer from "./components/nav/nav_bar_container";
import ProfileContainer from './components/profile/profile_container';
import UpdateProfileContainer from './components/profile/update_profile_container';
import ChangeEmailContainer from './components/profile/change_email_container';
import ChangePasswordContainer from './components/profile/change_password_container';
import { Switch, Route } from "react-router-dom";
import ChangePassword from './components/profile/change_password';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component{
  render() {
    return <div>
        <header className={"header"}>
          <Route path="/" component={HomeLogoContainer} />
          <Route path="/" component={NavBarContainer} />
        </header>
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/account/update-profile" component={UpdateProfileContainer} />
        <Route exact path="/account/change-email" component={ChangeEmailContainer} />
        <Route exact path='/account/change-password' component={ChangePasswordContainer} />
      </div>;
  }
}

export default App;
