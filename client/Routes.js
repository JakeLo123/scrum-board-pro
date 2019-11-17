import React from 'react';
import { connect } from 'react-redux';
import { UserHome, Login } from './components';
import { Switch, Route } from 'react-router-dom';
import { getInitialUser } from './redux/user';

class Routes extends React.Component {
	componentDidMount() {
		const { fetchUser } = this.props;
		fetchUser();
	}
	render() {
		const user = this.props.user;
		console.log('inside render func...', user);
		return user.email ? (
			<Switch>
				<Route path="/" component={UserHome} />
			</Switch>
		) : (
			<Route exact path="/" component={Login} />
		);
	}
}

const mapState = (state) => {
	return {
		user: state.user
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetchUser: () => {
			dispatch(getInitialUser());
		}
	};
};

export default connect(mapState, mapDispatch)(Routes);
