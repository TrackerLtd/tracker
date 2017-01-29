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
				</header>
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