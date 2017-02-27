import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Icon } from 'react-materialize';

class DatasetTable extends React.Component {

	render() {

		return (
			<Table>
				
				<thead>
					<tr>
						{ this.props.expenseAttributes.map( (item, key) => {
							// Use the array of expense attributes to populate the table headers
							return <th 	key={ key } 
										data-field={item}
										onClick={ () => this.props.sortExpenses(item) }>
										{item}<Icon>thumbs_up_down</Icon>
									</th>
						}) }
					</tr>
				</thead>

				<tbody>
					
					{ this.props.expensesForDisplay.map( (expense, key) => {
						// for each expense, return a new row of the table
						return <tr key={ key }>{ this.props.expenseAttributes.map( (attr, key) => {
							// for each table cell, use the array of attributes to key into the expense, and output the value at that key
							return <td key={ key }>{ expense[attr] }</td>
						}) }</tr>
					}) }
				</tbody>
			</Table>
		)
	}
}

export default DatasetTable;