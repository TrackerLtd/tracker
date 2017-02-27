import React from 'react';
import ReactDOM from 'react-dom';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const DatasetBar = React.createClass({
	render () {
  	return (
    	<BarChart width={600} height={300} data={this.props.formattedData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Bar dataKey="value" fill="#FF4081" />
      </BarChart>
    );
  }
})

export default DatasetBar;