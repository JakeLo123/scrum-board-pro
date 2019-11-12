import React from 'react';
import { connect } from 'react-redux';
import { UserHome, Login } from './components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const fakeUser = {
	email: 'jake@scrum.com'
};

class Routes extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {}
		};
	}

	render() {
		const user = this.state.user;
		return user.email ? (
			<Router>
				<Switch>
					<Route path="/home">
						<UserHome props={user} />
					</Route>
				</Switch>
			</Router>
		) : (
			<Login />
		);
	}
}

const mapState = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapState)(Routes);
