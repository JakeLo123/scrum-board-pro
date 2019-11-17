import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { parseDate, shortenText } from '../utils';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	card: {
		flex: '0 0 auto',
		width: 300,
		height: 400,
		margin: 15
	}
});

const ProjectCard = (props) => {
	const { project } = props;
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography style={{ height: '100px', margin: '7px 0 10px 0' }} variant="h5">
					{project.name}
				</Typography>
				<Typography
					style={{ height: '100px', margin: '7px 0' }}
					variant="body2"
					color="textSecondary"
					component="p"
				>
					{shortenText(project.description)}
				</Typography>
				<Typography style={{ height: '100px', margin: '7px 0' }} variant="h6">
					{project.tasks ? project.tasks.length : 0} tasks
				</Typography>
			</CardContent>
			<div className={classes.footer}>
				<Typography style={{ height: '100px', margin: '7px 0', whiteSpace: 'nowrap' }} variant="body2">
					<strong>Deadline: </strong>
					{parseDate(new Date(project.deadline))}
				</Typography>
			</div>
		</Card>
	);
};

export default ProjectCard;
