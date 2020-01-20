import React from 'react';
import { connect } from 'react-redux';
import { UserHome, Login, SelectedProject } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getInitialUser } from './redux/user';

class Routes extends React.Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    const { user } = this.props;
    const isLoggedIn = user.email;
    console.log(isLoggedIn ? 'user is logged in' : 'user is not logged in');
    return (
      <Router>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={UserHome} />
            <Route exact path="/projects" component={UserHome} />
            <Route
              exact
              path="/projects/:projectId"
              component={SelectedProject}
            />
          </Switch>
        ) : (
          <Login />
        )}
      </Router>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchUser: () => {
      dispatch(getInitialUser());
    },
  };
};

export default connect(mapState, mapDispatch)(Routes);
