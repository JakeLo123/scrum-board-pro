import React from 'react';
import { Typography, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';
import Navbar from './Navbar';

const useStyles = makeStyles({
  cardContainer: {
    flexWrap: 'nowrap',
    display: 'flex',
    overflowX: 'auto',
    overflowY: 'hidden',
    marginTop: 85,
  },
});

const UserHome = props => {
  const { cardContainer } = useStyles();
  const { user } = props;
  return user.email ? (
    <div className={cardContainer}>
      <Navbar user={user} />
      {user.projects.map(project => {
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

const mapState = state => {
  return {
    user: state.user,
  };
};

export default connect(mapState)(UserHome);
