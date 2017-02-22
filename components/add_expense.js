import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Button, Card, Navbar, NavItem, Form, Input } from 'react-materialize';

class AddExpense extends React.Component {

	render() {
		return <Row>
		    <Input s={12} label="Category" type="select" name="category" id="category" 
		    		onChange={ (evt) => this.props.onUpdateNewExpense(evt, evt.target.id) }
		    		value={ this.props.newExpense.category } >
		    	{ this.props.expenseCategories.map(category => {
		    		return <option value="{ category }">{ category }</option>
		    	}) }
		    </Input>
		    <Input s={12} label="Vendor" type="text" id="vendor" 
		    		onChange={ (evt) => this.props.onUpdateNewExpense(evt, evt.target.id) } />
		    <Input s={12} label="Amount" type="text" id="amount" 
		    		onChange={ (evt) => this.props.onUpdateNewExpense(evt, evt.target.id) } />
		    <Input s={12} type="date" id="date" 
		    		onChange={ (evt) => this.props.onUpdateNewExpense(evt, evt.target.id) }/>
		    <Button className="submit dark-primary-color"
		    		onClick={ () => this.props.onSubmitNewExpense() } >Submit</Button>
		</Row>
	}
}

export default AddExpense;