import React from 'react';
import ReactDOM from 'react-dom';

import { Navbar, NavItem } from 'react-materialize';

class Header extends React.Component {

	render() {
		return (
			<Navbar brand='Tracker' right>
			  <NavItem>Data Entry & Charts</NavItem>
			  <NavItem>Datasets</NavItem>
			  <NavItem>Account</NavItem>
			</Navbar>
		)
	}
}

export default Header;