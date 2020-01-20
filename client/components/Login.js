import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getUserThunk } from '../redux/user';

const Login = props => {
  return (
    <form className="login-signup-form" onSubmit={props.login}>
      <TextField
        label="Email"
        name="email"
        type="text"
        margin="normal"
        variant="filled"
        required
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        margin="normal"
        variant="filled"
        required
      />
      <Button type="submit" variant="contained">
        login
      </Button>
    </form>
  );
};

const mapState = state => {
  return { user: state.user };
};

const mapDispatch = dispatch => {
  return {
    login: event => {
      event.preventDefault();
      const user = {
        email: event.target.email.value,
        password: event.target.password.value,
      };
      dispatch(getUserThunk(user));
    },
  };
};

export default connect(mapState, mapDispatch)(Login);
