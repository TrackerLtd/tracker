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
				<Col s={12}>
					<Card className="white"> 
						<section>
							<h2>Customize Your Dataset</h2>
							<Row>
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

	// Would love to figure out how to modify a category, but so that it is somehow connected to it's firebase key and then it would update all of the existing entries with the modified category name. We realize this might be a big question, but even a nudge in the right direction would be great!
	modifyCategory(e, category) {
		let firebaseRef = firebase.database().ref('dataset/expenseCategories');
		const newCategory = this.state.newCategory;
		firebaseRef.push(newCategory);

		this.setState({ newCategory: '' });
	}

	deleteCategory(category, key) {
		let firebaseRef = firebase.database().ref('dataset/expenseCategories');
		firebaseRef.child(key).remove();
	}
}

export default ManageDatasets;