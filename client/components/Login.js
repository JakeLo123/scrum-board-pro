import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getUserThunk } from '../redux/user';

class Login extends React.Component {
	render() {
		return (
			<form className="login-signup-form" onSubmit={this.props.login}>
				<TextField label="Email" name="email" type="text" margin="normal" variant="filled" required />
				<TextField label="Password" name="password" type="password" margin="normal" variant="filled" required />
				<Button type="submit" variant="contained">
					login
				</Button>
			</form>
		);
	}
}

const mapDispatch = (dispatch, ownProps) => {
	const history = ownProps.history;
	return {
		login: (event) => {
			event.preventDefault();
			const user = {
				email: event.target.email.value,
				password: event.target.password.value
			};
			dispatch(getUserThunk(user)).then(() => history.push('/home'));
		}
	};
};

export default connect(null, mapDispatch)(Login);
