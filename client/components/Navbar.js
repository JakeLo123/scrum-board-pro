import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/user';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center;'
	}
});

const Navbar = (props) => {
	const classes = useStyles();
	const { logout } = props;
	return (
		<AppBar className={classes.container}>
			<Typography>{props.user.email}</Typography>
			<Button onClick={logout}>logout</Button>
		</AppBar>
	);
};

const mapDispatch = (dispatch) => {
	return {
		logout: () => dispatch(logoutUser())
	};
};

export default connect(null, mapDispatch)(Navbar);
