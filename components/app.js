import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
	getInitialState: function() {
		return {
			dummy: 'data'
		}
	},

	render: function() {
		return (
			<div>
				<header>
					<h1>Tracker</h1>
					<h2>Keep track of your life!</h2>
				</header>
				<ul className="tablist" role="tablist">
					<li role="tab">Login</li>
					<li role="tab">Sign-up</li>
				</ul>
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
				<section>
					<aside>
						<h2>Add New Dataset</h2><button>+</button>
					 	<h2>Edit Existing Dataset</h2>
					 	<ul>
					 		<li>Currently no datasets to edit</li>
					 	</ul>
					</aside>
					<section>
						<h2>Customize Your Dataset</h2>
						<form>
							<label htmlFor="title">Title
								<input type="text" id="title" />
							</label>
							<label htmlFor="categories">Create your categories
								<input type="text" id="categories" />
							</label>
							<p>Edit or delete your categories</p>
							<ul>
								<li>Currently no categories</li>
							</ul>
							<label htmlFor="inputs">Select inputs
								<input type="checkbox" name="inputs" value="vendor" />Vendor
								<input type="checkbox" name="inputs" value="amount" />Amount
								<input type="checkbox" name="inputs" value="date" />Date
							</label>
							<label htmlFor="target">Create target data?
								<input type="radio" name="target" value="yes" checked />Yes
								<input type="radio" name="target" value="no" />No
							</label>
							<input type="submit" value="Let's do this!" />
						</form>
					</section>
				</section>
				<main>
					<section>
						<form action="">
							<label htmlFor="category">
								Category
								<select name="category" id="category">
									<option value="groceries">Groceries</option>
									<option value="rent">Rent</option>
									<option value="transit">Transit</option>
									<option value="phone">Phone</option>
								</select>
							</label>
							<label htmlFor="vendor">
								Vendor
								<input type="text" id="vendor" />
							</label>
							<label htmlFor="amount"> 
								Amount
								<input type="text" id="amount" />
							</label>
							<label htmlFor="date">
								Date
								<input type="date" id="date" />
							</label>
							<input type="submit" id="date" />
						</form>
					</section>
					<section>
						<ul className="tablist" role="tablist">
							<li role="tab">Bar</li>
							<li role="tab">Pie</li>
							<li role="tab">Line</li>
							<li role="tab">Table</li>
						</ul>
						<div role="tabpanel"></div>
					</section>
				</main>
			</div>
		)
	}
});

export default App;