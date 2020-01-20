import React from 'react';
// import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { getSelectedProjectThunk } from '../redux/selectedProject';
import Navbar from './Navbar';
import AllTasks from './AllTasks';
import Loading from './Loading';

class SelectedProject extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const projectId = this.props.match.params.projectId;
    const fetchProject = this.props.fetchProject;
    fetchProject(projectId);
  }
  render() {
    const project = this.props.project;
    const { tasks } = project;
    const isLoading = !project.name;
    return isLoading ? (
      <Loading />
    ) : (
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

export default connect(mapState, mapDispatch)(SelectedProject);
