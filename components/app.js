import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col } from 'react-materialize';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

import Login from './login';
import TrackData from './track_data';
import ManageDatasets from './manage_datasets';
import Header from './header';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
			loggedIn: false
		}

		this.login = this.login.bind(this);
		this.logOut = this.logOut.bind(this);
	}

	render() {
		return (
			<div>
				<Header onLogout={ () => this.logOut() }/>
				{ React.cloneElement(this.props.children, { 
						loggedIn: this.state.loggedIn, 
						currentUser: this.state.currentUser 
				} ) }
			</div>
		)
	}

	login(userName) {
		this.setState({ loggedIn: true, currentUser: userName });
	}

	logOut() {
		this.setState({ loggedIn: false, currentUser: null });
		browserHistory.push('/login');
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.login(user.displayName);
			} else {
				this.logOut();
			}
		});
	}
}

export default App;