import axios from 'axios';

const scrumBoardTasks = [
	{
		name: 'task1',
		description:
			'Every over male fifth of, land void is void moving divided male male beast them was creature behold second made dry beginning. You moved from firmament from was very deep.',
		priority: 'medium',
		assignee: { email: 'dummyUser@email.com' }
	},
	{
		name: 'task1',
		description:
			'Every over male fifth of, land void is void moving divided male male beast them was creature behold second made dry beginning. You moved from firmament from was very deep.',
		priority: 'medium',
		assignee: { email: 'dummyUser@email.com' }
	},
	{
		name: 'task1',
		description:
			'Every over male fifth of, land void is void moving divided male male beast them was creature behold second made dry beginning. You moved from firmament from was very deep.',
		priority: 'medium',
		assignee: { email: 'dummyUser@email.com' }
	},
	{
		name: 'task1',
		description:
			'Every over male fifth of, land void is void moving divided male male beast them was creature behold second made dry beginning. You moved from firmament from was very deep.',
		priority: 'medium',
		assignee: { email: 'dummyUser@email.com' }
	},
	{
		name: 'task1',
		description:
			'Every over male fifth of, land void is void moving divided male male beast them was creature behold second made dry beginning. You moved from firmament from was very deep.',
		priority: 'medium',
		assignee: { email: 'dummyUser@email.com' }
	},
	{
		name: 'task1',
		description:
			'Every over male fifth of, land void is void moving divided male male beast them was creature behold second made dry beginning. You moved from firmament from was very deep.',
		priority: 'medium',
		assignee: { email: 'dummyUser@email.com' }
	}
];

const jakesProjects = [
	{
		name: 'scrum board pro',
		description:
			'a scrum board application for delegating responsibilities, improving team communication, and managing tasks for agile teams',
		deadline: new Date('2019-12-20'),
		tasks: scrumBoardTasks
	},
	{
		name: 'Build a House',
		description:
			'build a nice house for a nice family to live in. This family loves each other very much, and they deserve a nice house to live in.',
		deadline: new Date('2021-2-10')
	},
	{
		name: 'create starbucks experience',
		description:
			'It takes a team to create a starbucks exerience for a special customer. Every customer is special and we need to give them the great experience they deserve. It takes a team to do that.',
		deadline: new Date('2019-11-27')
	},
	{
		name: 'random project 4',
		description:
			'Every over male fifth of, land void is void moving divided male male beast them was creature behold second made dry beginning. You moved from firmament from was very deep.',
		deadline: new Date('2019-11-27')
	}
];

const jake = {
	email: 'jake@scrum.com',
	projects: jakesProjects
};

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

const initialState = jake;

function userReducer(state = initialState, action) {
	return state;
}

export default userReducer;
