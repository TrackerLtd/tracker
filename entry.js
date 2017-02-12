import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Button, Card, Row, Col } from 'react-materialize';

import App from './components/app';
import Login from './components/login';
import ManageDatasets from './components/manage_datasets';
import TrackData from './components/track_data';

import styles from './styles/style.css';
import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC03jOtrLV6FF2VTSw1h1Igx6EBhT2NToE",
    authDomain: "tracker-12281.firebaseapp.com",
    databaseURL: "https://tracker-12281.firebaseio.com",
    storageBucket: "tracker-12281.appspot.com",
    messagingSenderId: "802767118279"
  };
  firebase.initializeApp(config);

ReactDOM.render(<Router history={ browserHistory }>
					<Route path="/" component={ App } />
					<Route path="/managedata" component={ ManageDatasets } />
					<Route path="/track" component={ TrackData } />
				</Router>, document.getElementById("placeholder"));

