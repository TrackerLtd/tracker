import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

class TrackData extends React.Component {
	render() {
		return (
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
		)
	}

	componentDidMount() {
		if(!this.props.loggedIn) {
			console.log(this.props)
			browserHistory.push('/login');
		}
	}
}

export default TrackData;