import React from 'react';
import { connect } from 'react-redux';
import { UserHome, Login } from './components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { getInitialUser } from './redux/user';

const Routes = withRouter(
	class R extends React.Component {
		componentDidMount() {
			const { fetchUser } = this.props;
			fetchUser();
		}
		render() {
			return (
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/home" component={UserHome} />
				</Switch>
			);
		}
	}
);

const mapState = (state) => {
	return {
		user: state.user
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetchUser: () => {
			dispatch(getInitialUser()).then(() => console.log('okay'));
		}
	};
};

export default connect(mapState, mapDispatch)(Routes);
