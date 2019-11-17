import React from 'react';
import { Redirect } from 'react-router-dom';
import { Typography, Paper, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles({
	header: {
		textAlign: 'center',
		margin: 20,
		paddingTop: 10,
		paddingBottom: 10
	},
	cardContainer: {
		flexWrap: 'nowrap',
		display: 'flex',
		overflowX: 'auto',
		position: 'relative'
	},
	footer: {
		position: 'absolute',
		bottom: 10,
		margin: 15
	}
});

const UserHome = (props) => {
	const classes = useStyles();
	const { user } = props;
	return user.email ? (
		<div id="user-home-container">
			<Paper className={classes.header}>
				<Typography variant="h4">Scrum Board Pro</Typography>
				<Typography variant="h5">Welcome {user.email}, select a project</Typography>
			</Paper>
			<div className={classes.cardContainer}>
				{user.projects.map((project) => {
					return <ProjectCard key={project.id} project={project} />;
				})}
			</div>
		</div>
	) : (
		<div>
			<Typography>loading</Typography>
			<LinearProgress />
		</div>
	);
};

const mapState = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapState)(UserHome);
