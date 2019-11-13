import React from 'react';
import { connect } from 'react-redux';
import { UserHome, Login } from './components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Routes = (props) => {
	console.log(props);
	const user = props.user;
	return user.email ? (
		<Router>
			<Switch>
				<Route path="/home">
					<UserHome user={user} />
				</Route>
			</Switch>
		</Router>
	) : (
		<Login />
	);
};

const mapState = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapState)(Routes);
