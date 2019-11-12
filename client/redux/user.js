import axios from 'axios';

// action constants
const GET_USER = 'GET_USER';

// action creators
export const getUser = (user) => {
	return {
		type: GET_USER,
		user
	};
};

// thunk creators
export const getUserThunk = (user) => {
	// return async (dispatch) => {
	// };
};

const initialState = {};

function userReducer(state = initialState, action) {
	return state;
}

export default userReducer;
