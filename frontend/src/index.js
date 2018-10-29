import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import jwt_decode from "jwt-decode";

//Utils
import * as APIUtil from "./util/session_api_util";
import * as APIUser from "./util/user_api_util";
import * as APIParty from "./util/party_api_util";
import * as APIOpinion from "./util/opinion_api_util";

//Actions
import {updateUser} from "./actions/user_actions";

//Components
import configureStore from "./store/store";
import Root from "./Root.jsx";
// import registerServiceWorker from './registerServiceWorker';

// Testing
import { geocoderQuery } from "./actions/map_actions";
import {
  TestTour,
  searchArtist,
  searchCities,
  searchCitieState
} from "./util/events_api_util";
import { geocoder } from "./util/map_api_util";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  // Check for token
  if (localStorage.jwtToken) {
    // Set auth token header auth
    APIUtil.setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(APIUtil.setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(APIUtil.logoutUser());
      // Redirect to login
      window.location.href = "/login";
    }
  }
  
    
    window.socket = window.io();
    window.uploader = new window.SocketIOFileUpload(window.socket);
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    // registerServiceWorker();

    window.registerUser = APIUtil.registerUser;
    window.loginUser = APIUtil.loginUser;
    window.logoutUser = APIUtil.logoutUser;

    window.store = store;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.geocoder = geocoder;
    window.searchArtist = searchArtist;
    window.searchCities = searchCities;
    window.searchCitieState = searchCitieState;
    window.TestTour = TestTour;

    window.updateUser = APIUser.updateUser;
    window.updateUserAction = updateUser;

    window.fetchParty = APIParty.fetchParty;
    window.fetchCombinedOpinion = APIOpinion.fetchCombinedOpinion;
});
