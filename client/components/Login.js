import React from 'react';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}

	render() {
		return (
			<FormControl>
				<InputLabel htmlFor="login-email">Email address</InputLabel>
				<Input id="login-email" aria-describedby="my-helper-text" />
				<FormHelperText id="">We'll never share your email.</FormHelperText>
			</FormControl>
		);
	}
}

export default Login;
