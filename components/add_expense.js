import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Button, Card, Navbar, NavItem, Form, Input } from 'react-materialize';

class AddExpense extends React.Component {

	render() {
		return <Row>
		    <Input s={12} label="Category" type="select" name="category" id="category" 
		    		value={ this.props.newExpense.category }
		    		onChange={ (evt) => this.props.onUpdateNewExpense(evt, evt.target.id) } >
		    	{ Object.keys(this.props.expenseCategories).map(key => {
		    		return <option value={ this.props.expenseCategories[key] } key={ key }>{ this.props.expenseCategories[key] }</option>
		    	}) }
		    </Input>
		    <Input s={12} label="Vendor" type="text" id="vendor"
		    		value={ this.props.newExpense.vendor }
		    		onChange={ (evt) => this.props.onUpdateNewExpense(evt, evt.target.id) } />
		    <Input s={12} label="Amount" type="text" id="amount" 
		    		value={ this.props.newExpense.amount }
		    		onChange={ (evt) => this.props.onUpdateNewExpense(evt, evt.target.id) } />
		    <Input s={12} type="date" id="date" 
		    		value={ this.props.newExpense.date }
		    		onChange={ (evt) => this.props.onUpdateNewExpense(evt, evt.target.id) }/>
		    <Button className="submit dark-primary-color"
		    		onClick={ () => this.props.onSubmitNewExpense() } >Submit</Button>
		</Row>
	}
}

export default AddExpense;