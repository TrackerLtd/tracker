import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col } from 'react-materialize';
import firebase from 'firebase';

import Login from './login';
import TrackData from './track_data';

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
		return <div>
			{ React.cloneElement(this.props.children, { loggedIn: this.state.loggedIn, currentUser: this.state.currentUser }) }
		</div>
		{/*}
		if(!this.state.loggedIn) {
			return <Login onLogin={ (userName) => this.login(userName) } />
		} else {
			return <TrackData currentUser={ this.state.currentUser } />
		} */}
	}

	login(userName) {
	  this.setState({ loggedIn: true, currentUser: userName });
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