import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col, Input, Navbar, NavItem } from 'react-materialize';
import firebase from 'firebase';

var Login = React.createClass({
	render: function() {
		return (
			<Row className="light-primary-color">
				<Col s={8} offset="s2" className="primary-text-color">
					<Navbar className="tablist" role="tablist">
						<NavItem role="tab">Login</NavItem>
						<NavItem role="tab">Sign-up</NavItem>
					</Navbar>
					<Card id="login" className="login panel white" role="tabpanel">
						<h2>Login</h2>
						<form>
							<Row>
							    <Input s={6} type="email" label="Email" />
							    <Input s={6} type="password" label="Password" />
							    <Button className="submit dark-primary-color">Submit</Button>
							</Row>
						</form>
						
					</Card>
				</Col>
				<Col s={8} offset="s2" className="primary-text-color">
					<Card id="signup" className="signup panel white" role="tabpanel">
						<h2>Sign-up</h2>
						<form action="">
							<Row>
							    <Input type="text" s={12} label="Username" />
							    <Input s={6} type="email" label="Email" />
							    <Input s={6} type="password" label="Password" />
							    <Button className="submit dark-primary-color">Submit</Button>
							</Row>
						</form>
					</Card>
				</Col>
			</Row>
		)
	}
});

export default Login;