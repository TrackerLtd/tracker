import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col, Input } from 'react-materialize';

var Login = React.createClass({
	render: function() {
		return (
			<div>
				<div id="login" className="login panel" role="tabpanel">
					<h2>Login</h2>
					<form>
						<Row>
						    <Input type="email" s={6} label="Email" />
						    <Input s={6} type="password" label="Password" />
						    <Button className="cyan">Submit</Button>
						</Row>
					</form>
					
				</div>
				<div id="signup" className="signup panel" role="tabpanel">
					<h2>Sign-up</h2>
					<form action="">
						<Row>
						    <Input type="text" s={6} label="Username" />
						    <Input s={6} type="email" label="Email" />
						    <Input s={6} type="password" label="Password" />
						    <Button className="cyan">Submit</Button>
						</Row>
					</form>
				</div>
			</div>
		)
	}
});

export default Login;