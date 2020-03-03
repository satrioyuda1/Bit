const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOOGLE_DONE = 'TOOGLE_DONE';

export const data = (data = [], action) => {
	console.log(data);

	switch (action.type) {
		case ADD_TODO:
			return [
				...data,
				{
					id: action.payload.id,
					taskName: action.payload.title,
					description: action.payload.description,
					completed: false
				}
			];
		case DELETE_TODO:
			return data.filter((x) => x.id !== action.payload);
		case TOOGLE_DONE:
			return data.map((data) => (data.id === action.payload ? { ...data, completed: !data.completed } : data));
		default:
			return data;
	}
};
