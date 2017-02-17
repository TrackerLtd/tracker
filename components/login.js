    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Button, Card, Row, Col, Input, Navbar, NavItem } from 'react-materialize';
    import firebase from 'firebase';
    import {browserHistory} from 'react-router';

    import Alert from './alert';

    class Login extends React.Component {
    	constructor() {
    		super();

    		this.state = {
    			userName: '',
    			password: '',
    			email: '',
    			mode: 'signup',
    			error: null
    		}

    		this.signup = this.signup.bind(this);
    		this.login = this.login.bind(this);
    		
    	}

    	render() {
    		return (
    			<div>
    				<div className="topBar">
    					<header>
    						<h1>Tracker</h1>
    						<h2>Keep track of your life!</h2>
    					</header>
    				</div>
    				<Row className="light-primary-color">
    					<Col s={8} offset="s2" className="primary-text-color">
    						<Navbar className="tablist" role="tablist">
    							<NavItem onClick={ () => this.setState({ mode: 'login' }) } role="tab" className={ this.state.mode === 'login' ? "active" : ""}>Login</NavItem>
    							<NavItem onClick={ () => this.setState({ mode: 'signup' }) } role="tab" className={ this.state.mode === 'signup' ? "active" : ""}>Sign-up</NavItem>
    						</Navbar>
    						<Card className="panel white" role="tabpanel">
    							<h2>{ this.state.mode }</h2>
    							{ this.state.error ? <Alert type='error'>{ this.state.error }</Alert> : null }
    							<form action="">
    								<Row>
    									{ this.state.mode === 'signup' 
    											? <Input type="text" s={12} label="Username" 
    											onChange={ (evt) => this.setState({ userName: evt.target.value }) } /> 
    											: ''
    									}
    									
    									<Input 	s={6} type="email" label="Email" 
    											onChange={ (evt) => this.setState({ email: evt.target.value }) } />
    									<Input 	s={6} type="password" label="Password" 
    											onChange={ (evt) => this.setState({ password: evt.target.value }) }  />
    									<Button className="submit dark-primary-color"
    											onClick={ this.state.mode ==='login' ? (e) => { this.login(e) } : (e) => this.signup(e) }>Submit</Button>
    								</Row>
    							</form>
    						</Card>
    					</Col>
    				</Row>
    			</div>
    		)
    	}

    	signup(e) {
    		e.preventDefault();
    		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    		.then(user => {
    			return user.updateProfile({ displayName: this.state.userName })
    		})
    		.then((user) => { browserHistory.push('/') } )
    		.catch(error => this.setState({ error: error.message }));
    	}

    	login(e) {
    		e.preventDefault();
    		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    		.then((user) => { browserHistory.push('/') })
    		.catch((err) => this.setState({ error: err.message }));
    	}
    }

    export default Login;