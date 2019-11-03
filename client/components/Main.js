import React from 'react';
import { connect } from 'react-redux';

const Main = (props) => {
	console.log(props);
	return <div>{props.user.name}</div>;
};

const mapState = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapState)(Main);
