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
import DatasetPie from './dataset_pie';

class TrackData extends React.Component {
    constructor() {
        super();
        this.state = {
            newExpense: {},
            mode: 'table'
        }

        this.updateNewExpense = this.updateNewExpense.bind(this);
        this.submitNewExpense = this.submitNewExpense.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
        this.getTotalExpenses = this.getTotalExpenses.bind(this);
        this.getMonthlyExpenses = this.getMonthlyExpenses.bind(this);
    }

    render() {
        return (
            <main>
                <Row>
                    <Col s={4}>
                        <Card className="white">
                            <AddExpense newExpense={ this.state.newExpense }
                                        defaultExpense={ this.state.defaultExpense }
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
                                <NavItem    role="tab"
                                            onClick={ () => this.setState({ mode: 'pie' }) } 
                                            className={ this.state.mode === 'pie' ? "active" : "" }>Pie</NavItem>
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
                            formattedData={ this.getTotalExpenses(this.props.expensesForDisplay) } />;
            case 'pie':
                return <DatasetPie 
                            formattedData={ this.getTotalExpenses(this.props.expensesForDisplay) } />;
            case 'line':
                return <DatasetLine 
                            lineData={ this.getMonthlyExpenses(this.props.expensesForDisplay) } /> ;
            case 'table':
                return <DatasetTable   
                            expensesForDisplay={ this.props.expensesForDisplay } 
                            expenseAttributes={ this.props.expenseAttributes } 
                            sortExpenses={ (property) => this.props.sortExpenses(property) } />;
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
            
            let resetExpense = { category: newExpense.category }
            this.setState({ newExpense: resetExpense });
        } else {
            console.log('empty key!')
        }
        
    }

    getTotalExpenses(rawData) {
        console.log(rawData);
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

            return { name: key, value: categorySum };
        });

        return resultArray;
    }

    getMonthlyExpenses(rawData) {

        // Feb. 26, 2017, need to change one property value in every object in an array
        // Thanks to http://stackoverflow.com/questions/42306471/iterate-over-array-of-objects-and-change-one-property-in-each-object
        const data = rawData;

        const split = date => date.split('-')[1];
        const result = data.map(o => {
            o.date = split(o.date);
            return o;
        })

        let allMonths = result.reduce(function(obj, item){
                        obj[item.date] = obj[item.date] || [];
                        obj[item.date].push(item);
                        return obj;
                    }, {});

        let resultArray = Object.keys(allMonths).map((key) => { 
            const expensesForMonth = allMonths[key];
            const monthSum = expensesForMonth.reduce((total, value) => {
                return total += parseFloat(value.amount, 10);
            }, 0); 

            return { name: key, value: monthSum };
        });
        
        let numberedArray = resultArray.map(item => {
            item.name = parseFloat(item.name, 10);
            return item
        })

        let sortedArray = numberedArray.sort(function(a, b) {
            return a.name - b.name;
        });

        // return state to as it was before formatting date
        console.log(rawData);

        return sortedArray;
    }

}

export default TrackData;