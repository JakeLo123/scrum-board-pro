import React from 'react';
import { Redirect } from 'react-router-dom';
import { Typography, Paper, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles({
	cardContainer: {
		flexWrap: 'nowrap',
		display: 'flex',
		overflowX: 'auto',
		marginTop: 60
	}
});

const UserHome = (props) => {
	const classes = useStyles();
	const { user } = props;
	return user.email ? (
		<div className={classes.cardContainer}>
			{user.projects.map((project) => {
				return <ProjectCard key={project.id} project={project} />;
			})}
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
