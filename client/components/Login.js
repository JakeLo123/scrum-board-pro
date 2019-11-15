import React from 'react';
import { TextField, Button } from '@material-ui/core';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(this.state);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ email: '', password: '' });
		console.log('submitted');
	}

	render() {
		return (
			<form className="login-signup-form" onSubmit={this.handleSubmit}>
				<TextField
					value={this.state.email}
					onChange={this.handleChange}
					label="Email"
					name="email"
					type="text"
					margin="normal"
					variant="filled"
					required
				/>
				<TextField
					onChange={this.handleChange}
					value={this.state.password}
					label="Password"
					name="password"
					type="password"
					margin="normal"
					variant="filled"
					required
				/>
				<Button type="submit" variant="contained">
					login
				</Button>
			</form>
		);
	}
}

export default Login;
