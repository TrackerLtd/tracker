import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { browserHistory } from 'react-router';
import { Row, Col, Button, Card, Navbar, NavItem, Form, Input } from 'react-materialize';

import Header from './header';
import AddExpense from './add_expense';
import DatasetTable from './dataset_table';

class TrackData extends React.Component {
    constructor() {
        super();
        this.state = {
            newExpense: {},
            mode: 'table'
        }

        this.updateNewExpense = this.updateNewExpense.bind(this);
        this.submitNewExpense = this.submitNewExpense.bind(this);
    }

    render() {
        console.log(this.state)
        return (
            <main>
                <Row>
                    <Col s={4}>
                        <Card className="white">
                            <AddExpense onUpdateNewExpense={ (e, id) => this.updateNewExpense(e, id) } 
                                        onSubmitNewExpense={ () => this.submitNewExpense() } />
                        </Card>
                    </Col>
                    <Col s={8}>
                        <Card className="white">
                            <Navbar className="tablist right" role="tablist">
                                <NavItem    role="tab">Bar</NavItem>
                                <NavItem    role="tab">Pie</NavItem>
                                <NavItem    role="tab">Line</NavItem>
                                <NavItem    role="tab" 
                                            onClick={ () => this.setState({ mode: 'table' }) } 
                                            className={ this.state.mode === 'table' ? "active" : "" } >Table</NavItem>
                            </Navbar>
                            <div role="tabpanel">
                                { this.state.mode === 'table' ?
                                <DatasetTable   expensesForDisplay={ this.props.expensesForDisplay } 
                                                expenseAttributes={ this.props.expenseAttributes } />
                                            : ''
                                }
                            </div>
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

    updateNewExpense(e, id) {
        const newExpense = this.state.newExpense;
        newExpense[id] = e.target.value;
        this.setState({ newExpense: newExpense });
    }

    submitNewExpense() {
        let firebaseRef = firebase.database().ref('dataset/expenses');
        const newExpense = this.state.newExpense;
        firebaseRef.push(newExpense);

        this.setState({ newExpense: '' });
    }
}

export default TrackData;