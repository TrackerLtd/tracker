import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col, Icon, Input, Navbar, NavItem } from 'react-materialize';

import Header from './nav_bar'

class ManageDatasets extends React.Component {
	render() {
		return (
			<Row>
				<Header />
				<Col s={4}>
					<Card className="white"> 
						<aside>
							<Button id="addDataset" className="submit dark-primary-color">Add New Dataset<Icon left>library_add</Icon></Button>
						 	<Button id="editDataset" className="submit dark-primary-color">Edit Existing Dataset<Icon left>mode_edit</Icon></Button>
						 	<ul>
						 		<li>Currently no datasets to edit</li>
						 	</ul>
						</aside>
					</Card>
				</Col>
				<Col s={8}>
					<Card className="white"> 
						<section>
							<h2>Customize Your Dataset</h2>
							<Row>

								<Input s={12} type="text" label="Title" id="title" />
								<Input s={12} type="text" label="Create your categories" id="categories" />
								<p>Edit or delete your categories</p>
								<ul>
									<li>Currently no categories</li>
								</ul>
								<Row>
									<Input type="checkbox" name="inputs" value="vendor" label="Vendor" />
									<Input type="checkbox" name="inputs" value="amount" label="Amount" />
									<Input type="checkbox" name="inputs" value="date" label="Date" />
								</Row>
								<p>Create target data?</p>
								<Input type="radio" name="target" value="yes" label="Yes" />
								<Input type="radio" name="target" value="no" label="No" />
								
								<Button id="makeDataset" className="submit dark-primary-color">Let's Do This!<Icon left>done</Icon></Button>
							</Row>
						</section>
					</Card>
				</Col>
			</Row>
		)
	}
}

export default ManageDatasets;