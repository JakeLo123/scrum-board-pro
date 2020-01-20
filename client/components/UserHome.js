import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import Navbar from './Navbar';
import Loading from './Loading';
import { Link } from 'react-router-dom';

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
      {!user.projects.length ? (
        <Typography>you have no projects, go make one</Typography>
      ) : (
        user.projects.map(project => {
          return (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          );
        })
      )}
    </div>
  ) : (
    <Loading />
  );
};

const mapState = state => {
  return {
    user: state.user,
  };
};

export default connect(mapState)(UserHome);
