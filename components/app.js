import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col } from 'react-materialize';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

import Login from './login';
import TrackData from './track_data';
import ManageDatasets from './manage_datasets';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
			loggedIn: false
		}

		this.login = this.login.bind(this);
	}

	render() {
		return (
			<div>
				{ React.cloneElement(this.props.children, {loggedIn: this.state.loggedIn, currentUser: this.state.currentUser, onLogin: (userName) => this.login(userName) } ) }
			</div>
		)
	}

	login(userName) {
	  this.setState({ loggedIn: true, currentUser: userName });
	  browserHistory.push('/');
	}

	componentDidMount() {
	  firebase.auth().onAuthStateChanged((user) => {
		if(user) {
		this.login(user.displayName);
	  } else {
		this.setState({ loggedIn: false })
	  }
	});
	}
}

export default App;