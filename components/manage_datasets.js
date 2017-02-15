import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col, Input, Navbar, NavItem } from 'react-materialize';

import Header from './nav_bar'

class ManageDatasets extends React.Component {
	render() {
		return (
			<Row>
				<Header />
				<Col s={2} >
					<aside>
						<h2>Add New Dataset</h2><button>+</button>
					 	<h2>Edit Existing Dataset</h2>
					 	<ul>
					 		<li>Currently no datasets to edit</li>
					 	</ul>
					</aside>
				</Col>
				<Col s={6} offset="s2">
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
				</Col>
			</Row>
		)
	}
}

export default ManageDatasets;