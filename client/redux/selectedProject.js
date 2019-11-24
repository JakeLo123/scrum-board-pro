import axios from 'axios';

const initialState = {};

const GET_SELECTED_PROJECT = 'GET_SELECTED_PROJECT';

const getSelectedProject = (project) => {
	return {
		type: GET_SELECTED_PROJECT,
		project
	};
};

export const getSelectedProjectThunk = (projectId) => {
	return (dispatch) => {
		console.log('project ID given to thunk...', projectId);
		return axios
			.get(`/api/projects/${projectId}`)
			.then((res) => res.data)
			.then((project) => {
				console.log('project', project);
				dispatch(getSelectedProject(project));
			})
			.catch(console.error.bind(console));
	};
};

const selectedProjectReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SELECTED_PROJECT:
			return action.project;
		default:
			return state;
	}
};

export default selectedProjectReducer;
