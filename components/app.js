import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col } from 'react-materialize';

const App = React.createClass({
	getInitialState: function() {
		return {
			dummy: 'data'
		}
	},

	render: function() {
		return (
			<div>
				<div className="topBar">
					<header>
						<h1>Tracker</h1>
						<h2>Keep track of your life!</h2>
					</header>
					<ul className="tablist" role="tablist">
						<li role="tab">Login</li>
						<li role="tab">Sign-up</li>
					</ul>
				</div>
				<div>
					{ this.props.children }
				</div>
			</div>
		)
	}
});

export default App;