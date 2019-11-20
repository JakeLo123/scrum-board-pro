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
	return async (dispatch) => {
		const response = await axios.get(`/api/projects/${projectId}`);
		const project = response.data;
		console.log('got to project thunk...', project);
		dispatch(getSelectedProject(project));
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
