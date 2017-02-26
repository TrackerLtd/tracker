import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { browserHistory } from 'react-router';
import { Row, Col, Button, Card, Navbar, NavItem, Form, Input } from 'react-materialize';

import Header from './header';
import AddExpense from './add_expense';
import DatasetTable from './dataset_table';
import DatasetLine from './dataset_line';
import DatasetBar from './dataset_bar';

class TrackData extends React.Component {
    constructor() {
        super();
        this.state = {
            newExpense: {   
                            category: '',
                            vendor: '',
                            amount: '',
                            date: '' 
                        },
            mode: 'table'
        }

        this.updateNewExpense = this.updateNewExpense.bind(this);
        this.submitNewExpense = this.submitNewExpense.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
        this.getTotalExpenses = this.getTotalExpenses.bind(this);
    }

    render() {
        return (
            <main>
                <Row>
                    <Col s={4}>
                        <Card className="white">
                            <AddExpense newExpense={ this.state.newExpense }
                                        onUpdateNewExpense={ (e, id) => this.updateNewExpense(e, id) } 
                                        onSubmitNewExpense={ () => this.submitNewExpense() } 
                                        expenseCategories={ this.props.expenseCategories } />
                        </Card>
                    </Col>
                    <Col s={8}>
                        <Card className="white">
                            <Navbar className="tablist right" role="tablist">
                                <NavItem    role="tab"
                                            onClick={ () => this.setState({ mode: 'bar' }) } 
                                            className={ this.state.mode === 'bar' ? "active" : "" }>Bar</NavItem>
                                <NavItem    role="tab">Pie</NavItem>
                                <NavItem    role="tab"
                                            onClick={ () => this.setState({ mode: 'line' }) } 
                                            className={ this.state.mode === 'line' ? "active" : "" }>Line</NavItem>
                                <NavItem    role="tab" 
                                            onClick={ () => this.setState({ mode: 'table' }) } 
                                            className={ this.state.mode === 'table' ? "active" : "" } >Table</NavItem>
                            </Navbar>
                            <div role="tabpanel">
                                { this.renderDetails() }
                            </div>
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

    renderDetails() {

        switch (this.state.mode) {
            case 'bar':
                return <DatasetBar 
                            barData={ this.getTotalExpenses(this.props.expensesForDisplay) } />;
                // return <DatasetBar barData={ this.transform(this.state.rawData) }
            case 'pie':
                return <DatasetBar 
                            barData={ this.state.piebarData } />;
            case 'line':
                return <DatasetLine 
                            lineData={ this.state.data } /> ;
            case 'table':
                return <DatasetTable   
                            expensesForDisplay={ this.props.expensesForDisplay } 
                            expenseAttributes={ this.props.expenseAttributes } />;
        }
    }

    updateNewExpense(e, id) {
        const newExpense = this.state.newExpense;
        newExpense[id] = e.target.value;
        this.setState({ newExpense: newExpense });
    }

    submitNewExpense() {
        if( this.props.expenseAttributes.length === Object.keys(this.state.newExpense).length ) {
            let firebaseRef = firebase.database().ref('dataset/expenses');
            const newExpense = this.state.newExpense;
            firebaseRef.push(newExpense);

            this.setState({ newExpense: { 
                                            category: newExpense.category,
                                            vendor: '',
                                            amount: '',
                                            date: ''
                                        } });
        } else {
            console.log('empty key!')
        }
        
    }

    getTotalExpenses(rawData) {

        let categories = rawData.reduce(function(obj, item){
                        obj[item.category] = obj[item.category] || [];
                        obj[item.category].push(item);
                        return obj;
                    }, {});

        let resultArray = Object.keys(categories).map((key) => { 
            const expensesForCategory = categories[key];
            const categorySum = expensesForCategory.reduce((total, value) => {
                return total += parseFloat(value.amount, 10);
            }, 0); 

            return { category: key, total: categorySum };
        });

        return resultArray;
    }
}

export default TrackData;