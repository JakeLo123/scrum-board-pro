import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import TaskCard from './TaskCard';

const useStyles = makeStyles({
  container: {
    marginTop: 85,
    display: 'flex',
  },
  column: {
    flex: 1,
    margin: 3,
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overFlowY: 'scroll',
  },
  header: {
    margin: 5,
  },
});

const AllTasks = ({ tasks }) => {
  const { column, container, header } = useStyles();
  return (
    tasks.length && (
      <div className={container}>
        <Paper className={column}>
          <Typography className={header} variant="h5">
            low
          </Typography>
          <FilterAndMapTaskCards tasks={tasks} priorityLevel="low" />
        </Paper>
        <Paper className={column}>
          <Typography className={header} variant="h5">
            medium
          </Typography>
          <FilterAndMapTaskCards tasks={tasks} priorityLevel="medium" />
        </Paper>
        <Paper className={column}>
          <Typography className={header} variant="h5">
            high
          </Typography>
          <FilterAndMapTaskCards tasks={tasks} priorityLevel="high" />
        </Paper>
      </div>
    )
  );
};

const FilterAndMapTaskCards = props => {
  const { tasks, priorityLevel } = props;
  return tasks
    .filter(task => task.priority === priorityLevel)
    .map(task => <TaskCard key={task.id} task={task} />);
};

export default AllTasks;
