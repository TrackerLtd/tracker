import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Button, Card, Row, Col, Icon, Input, Navbar, NavItem } from 'react-materialize';

import Header from './header';

class ManageDatasets extends React.Component {
	constructor() {
		super();
		this.state = {
			newCategory: '',
			modifiedCategory: ''
		}

		this.submitNewCategory = this.submitNewCategory.bind(this);
	}
	
	render() {
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
								<Row s={12}>
									<Input s={10} type="text" label="Create your categories" id="categories" onChange={ (e) => this.setState({ newCategory: e.target.value }) }/>
									<Button id="addCategory" className="submit dark-primary-color" 
											onClick={ () => this.submitNewCategory() }>Add</Button>
								</Row>
								<ul>
									<li className="current-categories"><strong>Current categories:</strong> 
										<div className="clearfix">
											{ Object.keys(this.props.expenseCategories).map(key => {
												let categoryName = this.props.expenseCategories[key];
												return <Col key={ key }>
															<Input className="category" type="text" 
																id={ key }
																defaultValue={ this.props.expenseCategories[key] }
																onChange={ (e) => this.setState({ modifiedCategory: e.target.value }) }/>
															<Button onClick={ () => this.modifyCategory(categoryName) } ><Icon>mode_edit</Icon></Button>
															<Button 
																onClick={ (evt) => this.deleteCategory(categoryName, key) } ><Icon>delete</Icon></Button>
														</Col>
											}) }
										</div>
									</li>
								</ul>
									{ /* <Row s={12} >
										<Input type="checkbox" name="inputs" value="vendor" label="Vendor" />
										<Input type="checkbox" name="inputs" value="amount" label="Amount" />
										<Input type="checkbox" name="inputs" value="date" label="Date" />
									</Row> */ }

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

	modifyCategory(e, category) {
	}

	deleteCategory(category, key) {

		let firebaseRef = firebase.database().ref('dataset/expenseCategories');
		firebaseRef.child(key).remove();
	}
}

export default ManageDatasets;