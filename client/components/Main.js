import React from 'react';
import { connect } from 'react-redux';

const Main = (props) => {
	return <div>{props.user}</div>;
};

const mapState = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapState)(Main);
