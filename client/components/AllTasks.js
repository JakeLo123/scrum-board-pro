import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TaskCard from './TaskCard';

const useStyles = makeStyles({
  container: {
    marginTop: 85,
    display: 'flex',
  },
  header: {
    flex: 1,
    textAlign: 'center',
    border: '1px solid black',
    boxShadow: '1px 1px 1px',
    margin: 3,
  },
});

const AllTasks = ({ tasks }) => {
  const { header, container } = useStyles();
  return (
    tasks.length && (
      <div className={container}>
        <div className={header}>
          <Typography variant="h6">low</Typography>
          <FilterAndMapTaskCards tasks={tasks} priorityLevel="low" />
        </div>
        <div className={header}>
          <Typography variant="h6">medium</Typography>
          <FilterAndMapTaskCards tasks={tasks} priorityLevel="medium" />
        </div>
        <div className={header}>
          <Typography variant="h6">high</Typography>
          <FilterAndMapTaskCards tasks={tasks} priorityLevel="high" />
        </div>
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
