import React from 'react';
import ReactDOM from 'react-dom';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

  const style = {
  	top: 0,
  	left: 350,
  	lineHeight: '24px'
  };

class DatasetLine extends React.Component {

	render() {

		return (
	    	<RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={this.props.formattedData}>
	        <RadialBar minAngle={15} label background clockWise={true} dataKey='value'/>
	        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
	        </RadialBarChart>
	    );
	}
}

export default DatasetLine;