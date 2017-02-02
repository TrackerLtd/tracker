import React from 'react';
import ReactDOM from 'react-dom';

var Login = React.createClass({
	render: function() {
		return (
			<div>
				<div id="login" className="login panel" role="tabpanel">
					<h2>Login</h2>
					<form action="">
						<label htmlFor="login-email">
							<input type="email" id="login-email" />Email
						</label>
						<label htmlFor="login-password">
							<input type="password" id="login-password" />Password
						</label>
						<input type="submit" />
					</form>
				</div>
				<div id="signup" className="signup panel" role="tabpanel">
					<h2>Sign-up</h2>
					<form action="">
						<label htmlFor="username">
							<input type="text" id="username" />Username
						</label>
						<label htmlFor="signup-email">
							<input type="email" id="signup-email" />Email
						</label>
						<label htmlFor="signup-password">
							<input type="password" id="signup-password" />Password
						</label>
						<input type="submit" />
					</form>
				</div>
			</div>
		)
	}
});

export default Login;