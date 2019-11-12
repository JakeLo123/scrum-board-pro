import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import UserHome from './UserHome';

const Main = (props) => {
	return (
		<Router>
			<Switch>
				<Route path="/home">{/* <UserHome /> */}</Route>
			</Switch>
		</Router>
	);
};

const mapState = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapState)(Main);
