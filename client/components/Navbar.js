import React from 'react';
import { AppBar, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/user';

const useStyles = makeStyles({
  container: {
    height: 75,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'inline-block',
  },
  item: {
    flex: '0 1 auto',
    margin: '5px 15px',
  },
});

const Navbar = props => {
  const { container, item } = useStyles();
  const { logout, user, selectedProject } = props;
  return (
    <AppBar className={container}>
      <Button className={`${item} ${container}`}>
        <AddIcon style={{ margin: '5px', display: 'inline-block' }} />
        <Typography
          style={{ margin: '5px', display: 'inline-block' }}
          variant="body1"
        >
          new project
        </Typography>
      </Button>
      {selectedProject ? (
        <div className={item}>
          <Typography variant="h5">{selectedProject.name}</Typography>
        </div>
      ) : (
        <div className={item}>
          <Typography variant="h5">Scrum Board Pro</Typography>
          <Typography variant="h6">Welcome {user.email}</Typography>
        </div>
      )}
      <Button className={item} onClick={logout}>
        logout
      </Button>
    </AppBar>
  );
};

const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatch)(Navbar);
