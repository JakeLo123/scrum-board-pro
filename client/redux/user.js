import axios from 'axios';

// action constants
const GET_USER = 'GET_USER';

// action creators
const getUser = (user) => {
	return {
		type: GET_USER,
		user
	};
};

// thunk creators
export const getUserThunk = (user) => {
	return (dispatch) => {
		return axios
			.put(`/auth/login`, user)
			.then((res) => res.data)
			.then((data) => dispatch(getUser(data)))
			.catch(console.error.bind(console));
	};
};

export const getInitialUser = () => {
	return (dispatch) => {
		return axios
			.get('/auth/me')
			.then((res) => res.data)
			.then((data) => dispatch(getUser(data)))
			.catch(console.error.bind(console));
	};
};

const initialState = {};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER:
			return action.user;
		default:
			return state;
	}
}
