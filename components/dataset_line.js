import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class DatasetLine extends React.Component {

	render() {

		return (
			<LineChart width={600} height={300} data={this.props.lineData}
			            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			       <XAxis dataKey="category"/>
			       <YAxis/>
			       <CartesianGrid strokeDasharray="3 3"/>
			       <Tooltip/>
			       <Legend />
			       <Line type="monotone" dataKey="expense" stroke="#8884d8" activeDot={{r: 8}}/>
			 </LineChart>
		)
	}
}

export default DatasetLine;