import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import { parseDate, shortenText } from '../utils';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    flex: '0 0 auto',
    width: 300,
    height: 400,
    margin: 15,
    position: 'relative',
  },
  tasks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
    margin: '10px 0',
  },
  footer: {
    position: 'absolute',
    bottom: 3,
    margin: 15,
    height: 'fit-content',
    whiteSpace: 'nowrap',
  },
});

const ProjectCard = props => {
  const { project } = props;
  const classes = useStyles();
  return (
    <Card className={`card-hover ${classes.card}`}>
      <CardContent>
        <Typography
          style={{ height: '50px', margin: '10px 0 10px 0' }}
          variant="h5"
        >
          {project.name}
        </Typography>
        <Typography
          style={{ height: '200px', margin: '7px 0' }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {shortenText(project.description)}
        </Typography>
        <div className={classes.tasks}>
          <Typography variant="h6">
            {project.tasks ? project.tasks.length : 0} tasks
          </Typography>
          <GroupIcon className="icon-hover" />
        </div>
      </CardContent>
      <div className={classes.footer}>
        <Typography variant="body2">
          <strong>Deadline: </strong>
          {parseDate(new Date(project.deadline))}
        </Typography>
      </div>
    </Card>
  );
};

export default ProjectCard;
