const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOOGLE_DONE = 'TOOGLE_DONE';

export const postData = (data) => {
	return {
		type: ADD_TODO,
		payload: data
	};
};

export const deleteData = (id) => {
	return {
		type: DELETE_TODO,
		payload: id
	};
};

export const updateDone = (id) => {
	return {
		type: TOOGLE_DONE,
		payload: id
	};
};
