import React from 'react';
// import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { getSelectedProjectThunk } from '../redux/selectedProject';
import Navbar from './Navbar';
import AllTasks from './AllTasks';

class SingleProject extends React.Component {
  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    const fetchProject = this.props.fetchProject;
    fetchProject(projectId);
  }
  render() {
    const project = this.props.project;
    const { name, tasks } = this.props.project;
    // Tasks is undefined
    return (
      <div>
        <Navbar selectedProject={project} />
        <AllTasks tasks={tasks} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    project: state.selectedProject,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchProject: projectId => dispatch(getSelectedProjectThunk(projectId)),
  };
};

export default connect(mapState, mapDispatch)(SingleProject);
