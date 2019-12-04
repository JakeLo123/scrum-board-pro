import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { shortenText } from '../utils';

const useStyles = makeStyles({
  card: {
    margin: 4,
    width: '97%',
  },
});

const TaskCard = props => {
  const { name, description, userId } = props.task;
  let assignee = userId ? userId : 'not assigned';
  const { card } = useStyles();
  return (
    <Card className={card}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body1">{name}</Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ fontSize: 12 }}
          >
            {shortenText(description, 40)}
          </Typography>
          <Typography variant="body2">assigned to: {assignee}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskCard;
