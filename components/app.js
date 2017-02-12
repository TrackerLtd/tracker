import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col } from 'react-materialize';

import Login from './login';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
			loggedIn: false
		}
	}

	render() {
		if (!this.state.loggedIn) {
			return <Login onLogin={ (userName) => this.login(userName) }/>
		} else {
			return <TrackData currentUser={ this.state.currentUser } />
		}
	}

	login(userName) {
	  this.setState({ currentUser: userName });
	  console.log(this.state.currentUser);
	}

	componentDidMount() {
	  firebase.auth().onAuthStateChanged((user) => {
	    if (user) {
	      this.setState({loggedIn: true, currentUser: user.displayName })
	    } else {
	      this.setState({loggedIn: false })
	    }
	  })
	}

}	

export default App;