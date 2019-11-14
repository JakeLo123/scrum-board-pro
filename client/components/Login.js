import React from 'react';
import { TextField } from '@material-ui/core';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			password: '',
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
	}

	render() {
		return (
			<form onSubmit={() => this.handleSubmit}>
				<div>
					<TextField
						onChange={this.handleChange}
						label="email"
						name="email"
						value={this.state.email}
						margin="normal"
						variant="outlined"
						// id="outlined-search"
						// type="input"
						// className={classes.textField}
					/>
					<TextField
						onChange={this.handleChange}
						label="password"
						name="password"
						value={this.state.password}
						margin="normal"
						variant="outlined"
						// type="input"
						// id="outlined-search"
						// className={classes.textField}
					/>
				</div>
			</form>
		);
	}
}

export default Login;
