import React from 'react';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { getSelectedProjectThunk } from '../redux/selectedProject';

class SingleProject extends React.Component {
	componentDidMount() {
		const projectId = this.props.match.params.projectId;
		const fetchProject = this.props.fetchProject;
		fetchProject(projectId);
	}
	render() {
		const { name, tasks } = this.props.project;
		return <div>{/* here is where we map out tasks */}</div>;
	}
}

const mapState = (state) => {
	return {
		project: state.selectedProject
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetchProject: (projectId) => dispatch(getSelectedProjectThunk(projectId))
	};
};

export default connect(mapState, mapDispatch)(SingleProject);
