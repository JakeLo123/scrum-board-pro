import React from 'react';
import { Typography, Paper, Card, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
	card: {
		flex: '0 0 auto',
		width: 300,
		height: 400,
		margin: 15
	},
	footer: {
		position: 'absolute',
		bottom: 10,
		margin: 15
	}
});

const dayOfWeekMap = {
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
	7: 'Sunday'
};
function parseDate(dateObj) {
	const dayOfWeek = dayOfWeekMap[dateObj.getDay()];
	const day = dateObj.getDate();
	const month = dateObj.getMonth();
	const year = dateObj.getFullYear();
	const output = `${dayOfWeek} ${day}-${month}-${year}`;
	return output;
}

function shortenText(text) {
	if (text.length > 300) {
		return text.slice(0, 300) + '...';
	} else {
		return text;
	}
}

const UserHome = (props) => {
	const classes = useStyles();
	const user = props.user;
	return (
		<div id="user-home-container">
			<Paper className={classes.header}>
				<Typography variant="h4">Scrum Board Pro</Typography>
				<Typography variant="h5">Welcome {user.email}, select a project</Typography>
			</Paper>
			<div className={classes.cardContainer}>
				{user.projects.map((project, idx) => {
					return (
						<Card key={idx} className={classes.card}>
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
								<Typography style={{ height: '100px', margin: '7px 0' }} variant="body2">
									<strong>Deadline: </strong>
									{parseDate(project.deadline)}
								</Typography>
							</div>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default UserHome;
