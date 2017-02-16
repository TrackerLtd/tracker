import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Row, Col, Button, Card, Navbar, NavItem, Form, Input } from 'react-materialize';

import Header from './nav_bar'

class TrackData extends React.Component {
	render() {
		return (
			<main>
				<Header />
				<Row>
					<Col s={4}>
						<Card className="white">
							<Row>
								<Input s={12} defaultValue="rent" label="Category" type="select" name="category" id="category">
									<option value="groceries">Groceries</option>
									<option value="rent">Rent</option>
									<option value="transit">Transit</option>
									<option value="phone">Phone</option>
								</Input>
								<Input s={12} label="Vendor" type="text" id="vendor" />
								<Input s={12} label="Amount" type="text" id="amount" />							
								<Input s={12} type="date" id="date" />
								<Button className="submit dark-primary-color">Submit</Button>
							</Row>
						</Card>
					</Col>
					<Col s={8}>
						<Card className="white">
							<Navbar className="tablist right" role="tablist">
								<NavItem role="tab">Bar</NavItem>
								<NavItem role="tab">Pie</NavItem>
								<NavItem role="tab">Line</NavItem>
								<NavItem role="tab">Table</NavItem>
							</Navbar>
							<div role="tabpanel"></div>
							<Button id="date" className="submit dark-primary-color">Compare</Button>
							<label>
								Show Target Dataset
								<Input name='on' type='switch' value='1' />
							</label>
							
						</Card>
					</Col>
				</Row>
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