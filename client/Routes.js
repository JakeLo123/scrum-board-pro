import React from 'react';
import { connect } from 'react-redux';
import { UserHome, Login } from './components';
import { Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
	componentDidMount() {}
	render() {
		return (
			<Switch>
				<Route path="/home" component={UserHome} />
				<Route path="/" component={Login} />
			</Switch>
		);
	}
}

const mapState = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapState)(Routes);
