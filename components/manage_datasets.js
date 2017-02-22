import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Button, Card, Row, Col, Icon, Input, Navbar, NavItem } from 'react-materialize';

import Header from './header';

class ManageDatasets extends React.Component {
	constructor() {
		super();
		this.state = {
			newCategory: ''
		}

		this.submitNewCategory = this.submitNewCategory.bind(this);
	}
	
	render() {
		console.log(this.props.expenseCategories)
		return (
			<Row>
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
								<Input s={10} type="text" label="Create your categories" id="categories" onChange={ (e) => this.setState({ newCategory: e.target.value }) }/>
								<Button id="addCategory" className="submit dark-primary-color" onClick={ () => this.submitNewCategory() }>Add</Button>
								<p>Edit or delete your categories</p>
								<ul>
									<li>Current categories: 

										{ this.props.expenseCategories.map(category => {
											let thiscategory = category;
											return <span> {category} </span>
										}) }
									</li>
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

	submitNewCategory() {
	    let firebaseRef = firebase.database().ref('dataset/expenseCategories');
	    const newCategory = this.state.newCategory;
	    firebaseRef.push(newCategory);

	    this.setState({ newCategory: '' });
	}
}

export default ManageDatasets;