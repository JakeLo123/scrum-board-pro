import React from 'react';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { getSelectedProjectThunk } from '../redux/selectedProject';

class SingleProject extends React.Component {
	componentDidMount() {
		const { projectId } = this.props.match.params;
		const fetchProject = this.props.fetchProject;
		fetchProject(projectId);
	}
	render() {
		const { name } = this.props.project;
		console.log('the props', this.props);
		return (
			<div>
				<Typography>{name}</Typography>
			</div>
		);
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
