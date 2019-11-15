import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getUserThunk } from '../redux/user';

class Login extends React.Component {
	constructor(props) {
		super(props);
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
		console.log(this.props);
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

const mapDispatch = (dispatch) => {
	return {
		login: (user) => dispatch(getUserThunk(user))
	};
};

export default connect(null, mapDispatch)(Login);
