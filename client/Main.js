import React from 'react';
import { connect } from 'react-redux';
import { UserHome, Login, Navbar } from './components';
import { Switch, Route } from 'react-router-dom';
import { getInitialUser } from './redux/user';

class Main extends React.Component {
	componentDidMount() {
		const { fetchUser } = this.props;
		fetchUser();
	}
	render() {
		const isLoggedIn = this.props.user.email;
		if (isLoggedIn) console.log('logged in');
		return isLoggedIn ? (
			<div>
				<Navbar user={this.props.user} />
				<Routes />
			</div>
		) : (
			<Login />
		);
	}
}

const Routes = () => {
	return (
		<Switch>
			<Route path="/" component={UserHome} />
			<Route path="/home" component={UserHome} />
		</Switch>
	);
};

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

export default connect(mapState, mapDispatch)(Main);
