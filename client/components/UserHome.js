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
		display: 'flex'
	},
	card: {
		flex: 1,
		margin: 15,
		position: 'relative'
	}
	// footer: {
	// 	position: 'absolute'
	// 	// bottom: 10
	// }
});

function shortenText(text) {
	if (text.length > 70) {
		return text.slice(0, 70) + '...';
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
								<Typography variant="h5" component="h2">
									{project.name}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{shortenText(project.description)}
								</Typography>
							</CardContent>
							{/* <div> */}
							{/* <Typography variant="body2">{project.deadline}</Typography> */}
							{/* </div> */}
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default UserHome;
