import React from 'react';
import { Typography, Paper } from '@material-ui/core';

const TaskCard = props => {
  const { task } = props;
  return (
    <Paper>
      <Typography variant="body1">{task.name}</Typography>
    </Paper>
  );
};

export default TaskCard;
