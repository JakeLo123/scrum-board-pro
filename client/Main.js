import React from 'react';
import { connect } from 'react-redux';
import { UserHome, Login, SingleProject } from './components';
import { Switch, Route } from 'react-router-dom';
import { getInitialUser } from './redux/user';

class Main extends React.Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }
  render() {
    console.log('props from main component...', this.props);
    const { user } = this.props;
    const isLoggedIn = user.email;
    if (isLoggedIn) console.log('user logged in');
    return isLoggedIn ? <Routes /> : <Login />;
  }
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={UserHome} />
      <Route exact path="/projects" component={UserHome} />
      <Route exact path="/projects/:projectId" component={SingleProject} />
    </Switch>
  );
};

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

export default connect(mapState, mapDispatch)(Main);
