import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import { Navbar, NavItem } from 'react-materialize';

class Header extends React.Component {

	render() {
		return (
			<Navbar className="dark-primary-color" brand='Tracker' right>
				<li><Link to="/">Data Entry & Charts</Link></li>
				<li><Link to="/managedata">Datasets</Link></li>
				<li><Link to="#">Account</Link></li>
				<li onClick={ () => this.props.onLogout() }>Log Out</li>
			</Navbar>
		)
	}
}

export default Header;