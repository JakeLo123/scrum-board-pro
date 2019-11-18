import axios from 'axios';

// action constants
const GET_USER = 'GET_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// action creators
const getUser = (user) => {
	return {
		type: GET_USER,
		user
	};
};

const logout = () => {
	return {
		type: LOGOUT_USER,
		user: {}
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

export const logoutUser = () => {
	return (dispatch) => {
		return axios.delete('/auth/logout').then(() => dispatch(logout())).catch(console.error.bind(console));
	};
};

const initialState = {};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER:
			return action.user;
		case LOGOUT_USER:
			return action.user;
		default:
			return state;
	}
}
