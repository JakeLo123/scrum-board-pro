import React from 'react';
import { Typography, Card, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    margin: 2,
  },
});

const TaskCard = props => {
  const { task } = props;
  const { card } = useStyles();
  return (
    <Card className={card}>
      <Typography variant="body1">{task.name}</Typography>
    </Card>
  );
};

export default TaskCard;
