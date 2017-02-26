import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'react-materialize';

class DatasetTable extends React.Component {

	render() {

		return (
			<Table>
				
				<thead>
					<tr>
						{ this.props.expenseAttributes.map(item => {
							// Use the array of expense attributes to populate the table headers
							return <th data-field={item}>{item}</th>
						}) }
					</tr>
				</thead>

				<tbody>
					
					{ this.props.expensesForDisplay.map(expense => {
						// for each expense, return a new row of the table
						return <tr>{ this.props.expenseAttributes.map(attr => {
							// for each table cell, use the array of attributes to key into the expense, and output the value at that key
							return <td>{ expense[attr] }</td>
						}) }</tr>
					}) }
				</tbody>
			</Table>
		)
	}
}

export default DatasetTable;